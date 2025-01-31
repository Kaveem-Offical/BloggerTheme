import { useState } from 'react';
import { Upload } from 'lucide-react';

const Html_To_Blogger = () => {
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

  const handleFileUpload = (event, contentType) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (contentType === 'html') setHtmlContent(e.target.result);
        if (contentType === 'css') setCssContent(e.target.result);
        if (contentType === 'js') setJsContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const generateBloggerTemplate = () => {
    setLoading(true);
    setTimeout(() => {
      
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
  }, 10000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-8">Blogger Template Converter</h1>
          <div className="space-y-6">
            {['html', 'css', 'js'].map((type) => (
              <div key={type} className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload {type.toUpperCase()} File
                </label>
                <input
                  type="file"
                  accept={type === 'html' ? '.html,.htm' : `.${type}`}
                  onChange={(e) => handleFileUpload(e, type)}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            ))}
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

export default Html_To_Blogger;