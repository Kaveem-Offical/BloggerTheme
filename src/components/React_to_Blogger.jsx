import { useState } from 'react';
import { Upload } from 'lucide-react';

const React_to_Blogger = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [cssContent, setCssContent] = useState('');
  const [jsContent, setJsContent] = useState('');
  const [loading, setLoading] = useState(false);

  const baseTemplate = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:responsive='true' expr:dir='data:blog.languageDirection' lang='en-US' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
 <head>
 <meta content='width=device-width, initial-scale=1' name='viewport'/>
  <b:include data='blog' name='all-head-content'/>
  <title><data:blog.pageTitle/></title>
  <b:skin><![CDATA[
    body{background:#fff}
   ]]></b:skin>
 </head>
 <body>
  <b:section class='main' id='main' showaddelement='yes'>
    <b:widget id='HTML1' locked='false' title='' type='HTML'>
      <b:widget-settings>
        <b:widget-setting name='content'><![CDATA[
    {FULL_CONTENT}
]]></b:widget-setting>
      </b:widget-settings>
      <b:includable id='main'>
  <b:if cond='data:title != ""'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>
  <b:include name='quickedit'/>
</b:includable>
    </b:widget>
  </b:section>
  </body>
</html>`;

  const handleFolderUpload = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);

    try {
      // Find the required files in the uploaded folder
      let htmlFile, cssFile, jsFile;

      for (const file of files) {
        const path = file.webkitRelativePath || file.name;

        // Look for index.html in the root of the build folder
        if (path.endsWith('index.html')) {
          htmlFile = file;
        }
        // Look for main.*.css in the static/css folder
        else if (path.includes('static/css/') && path.includes('main.') && path.endsWith('.css')) {
          cssFile = file;
        }
        // Look for main.*.js in the static/js folder
        else if (path.includes('static/js/') && path.includes('main.') && path.endsWith('.js')) {
          jsFile = file;
        }
      }

      if (!htmlFile || !cssFile || !jsFile) {
        throw new Error(
          'Required files (index.html, main.*.css, main.*.js) not found in the uploaded folder.'
        );
      }

      // Read the contents of the files
      const readFile = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = (e) => reject(e);
          reader.readAsText(file);
        });
      };

      const [htmlContent, cssContent, jsContent] = await Promise.all([
        readFile(htmlFile),
        readFile(cssFile),
        readFile(jsFile),
      ]);

      setHtmlContent(htmlContent);
      setCssContent(cssContent);
      setJsContent(jsContent);
    } catch (error) {
      console.error('Error processing files:', error);
      alert('Error processing files. Please ensure you uploaded the correct build folder.');
    } finally {
      setLoading(false);
    }
  };

  const generateBloggerTemplate = () => {
    setLoading(true);
    try {
      let template = baseTemplate;
      const fullContent = `${htmlContent}<style>${cssContent}</style><script>${jsContent}</script>`;
      template = template.replace('{FULL_CONTENT}', fullContent);

      const blob = new Blob([template], { type: 'text/xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'blogger-template.xml';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating template:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-8">Blogger Template Converter</h1>
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Build Folder
              </label>
              <input
                type="file"
                // Allow directory upload
                webkitdirectory="true"
                directory="true"
                onChange={handleFolderUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={generateBloggerTemplate}
                disabled={loading || (!htmlContent && !cssContent && !jsContent)}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Converting...' : <><Upload size={20} /> Generate Blogger Template</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React_to_Blogger;