import { Code2, Globe, Code, Palette, Puzzle, Moon, Zap, LifeBuoy, BookOpen, Infinity as Unlimited, Shield } from "lucide-react";
import heroImage from "../assets/hero.png";
import bannerImg from "../assets/banner.png";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="/" className="font-bold text-xl">
                theFront
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#howitworks" className="text-sm text-gray-600 hover:text-gray-900">
                How It Works
              </a>
              <Link to={"/static"} className="text-sm text-gray-600 hover:text-gray-900">
                Static
              </Link>
              <Link to={"/react"} className="text-sm text-gray-600 hover:text-gray-900">
                Feameworks
              </Link>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Docs
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                FAQ
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Support
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
            Convert Your Website to{" "}<br />
              <span className="text-blue-600">Blogger Themes.</span>
            </h1>
            <p className="mt-4 text-lg  text-gray-600">
              Turn your HTML, CSS, JS, React, or Next.js dynamic websites into Blogger themes<br/> and enjoy
            <span className="text-blue-600"> free lifetime hosting</span>, <span  className="text-blue-600">unlimited bandwidth</span>, and the
            power of Google-backed infrastructure.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#cta">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium">
                  Get Started
                </button>
              </a>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-sm font-medium">
                Documentation
              </button>
            </div>
          </div>
          <div>
            <img src={heroImage} alt="Website mockups" className="w-full" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Unlocking New Possibilities</h2>
            <p className="mt-4 text-gray-600">
              theFront is not just a hosting solution; it's a gateway to new
              opportunities:
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto flex items-center justify-center">
                <Puzzle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Scalability</h3>
              <p className="mt-2 text-gray-600">
                As your website grows, theFront scales effortlessly to
                accommodate increased traffic and content, ensuring consistent
                performance.{" "}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto flex items-center justify-center">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                User-Friendly Interface
              </h3>
              <p className="mt-2 text-gray-600">
                Our platform offers an intuitive interface, making it accessible
                for users of all technical levels to convert and host their
                websites with ease.{" "}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto flex items-center justify-center">
                <Palette className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Community Support</h3>
              <p className="mt-2 text-gray-600">
                Join a community of like-minded individuals and access resources
                to help you make the most of our services.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>


      
      {/* Instructions Section */}
      <div id="howitworks" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Instruction 1: Create Blogger Theme */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-600 mr-2" />
                <h3 className="text-2xl font-semibold">Create Blogger Theme</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Convert your HTML, CSS, and JavaScript or React or Nextjs or Angular code into a fully functional Blogger theme.
              </p>
              <ol className="list-decimal list-inside text-gray-600">
                <li>Upload your HTML, CSS, and JS files or Build files.</li>
                <li>We generate a Blogger-compatible XML template.</li>
                <li>Download the template and upload it to Blogger.</li>
              </ol>
            </div>

            {/* Instruction 2: Host on Blogger */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-purple-600 mr-2" />
                <h3 className="text-2xl font-semibold">Host on Blogger</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Deploy your React, Next.js, or static website on Blogger for free.
              </p>
              <ol className="list-decimal list-inside text-gray-600">
                <li>Create Account and Setup a Blog in Blogger.com.</li>
                <li>Go to Themes page & click on the drop down beside Customize.</li>
                <li>Click on the Restore Menu and Select the XML file.</li>
                <li>Upload the template to Blogger and enjoy free hosting.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Code Section */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Build tools and full documention
            </h2>
            <p className="mt-4 text-gray-600">
              Components, plugins, and build tools are all thoroughly documented
              with live examples and markup for easier use and customization.
            </p>
          </div>
          <div className="mt-12 bg-gray-900 rounded-lg p-6 font-mono text-sm text-green-400">
            <pre>
              {`$ yarn install
// or
$ npm install

// Everything installed!

$ yarn start
$ npm run start

// Development started, opening localhost:3000`}
            </pre>
          </div>
        </div>
      </div> */}

      {/* Interesting Facts Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Blogger?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-green-600" />,
                title: 'Reliable & Secure',
                description: 'Backed by Google, Blogger offers top-notch security and reliability.',
              },
              {
                icon: <Unlimited className="w-8 h-8 text-purple-600" />,
                title: 'Unlimited Bandwidth',
                description: 'No limits on traffic or bandwidth usage.',
              },
              {
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                title: 'Easy to Use',
                description: 'Simple interface for managing your website and content.',
              },
            ].map((fact, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">{fact.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                The powerful and flexible Hosting for all kinds of Frameworks
              </h2>
              <p className="mt-4 text-gray-600">
                In today's digital landscape, establishing a robust online
                presence is essential. However, navigating the complexities of
                web hosting, especially for dynamic applications like React.js,
                Next.js, or Angular, can be daunting and often comes with
                significant costs. Enter theFront—a revolutionary SaaS
                platform designed to simplify this process by converting your
                HTML, CSS, JavaScript, or frameworks like React.js, Next.js, and
                Angular into Blogger themes, enabling seamless hosting on
                Blogger.com at no cost.
              </p>
            </div>
            <div>
              <img
                src={bannerImg}
                alt="Feature illustration"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="pb-20">
        <h2 className="text-3xl p-20 text-center font-bold">
          Why Choose theFront ?
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* <FeatureCard
              icon={<Palette className="w-6 h-6 text-blue-600" />}
              title="Themeable"
              description="Customize any part of our components to match your design needs"
            />
            <FeatureCard
              icon={<Moon className="w-6 h-6 text-blue-600" />}
              title="Light and dark UI"
              description="Optimized for multiple color modes. Use light or dark, your choice"
            /> */}
            <FeatureCard
              icon={<Puzzle className="w-6 h-6 text-blue-600" />}
              title="Unlimited Storage Backed by Google"
              description="By leveraging Blogger.com, a platform supported by Google's robust infrastructure, your website benefits from unlimited storage and exceptional uptime. Google's servers are renowned for their reliability and ability to handle high traffic volumes without compromising performance."
            />
            <FeatureCard
              icon={<LifeBuoy className="w-6 h-6 text-blue-600" />}
              title="Cost-Effective Solution"
              description="Traditional hosting services can be expensive, especially for dynamic websites. theFront offers a free alternative, allowing you to host various types of websites—from static pages to complex applications built with modern frameworks—without incurring hosting fees."
            />
            <FeatureCard
              icon={<Code2 className="w-6 h-6 text-blue-600" />}
              title="Simplified Conversion Process"
              description="Transforming your existing codebase into a Blogger theme can be complex. theFront streamlines this process, converting your HTML, CSS, JavaScript, React.js, Next.js, or Angular code into a compatible Blogger theme, ready for deployment on Blogger.com."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-blue-600" />}
              title="Enhanced Performance and Security"
              description="Hosting your website on Blogger.com ensures fast load times and robust security measures, courtesy of Google's advanced technologies. This setup provides a secure environment for your website, safeguarding it against common online threats."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="cta" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">
            Get started with theFront today
          </h2>
          <p className="mt-4 text-gray-600">
            Embrace the future of website hosting with theFront. Experience
            the convenience of converting your code into Blogger themes and
            hosting them on Blogger.com, all for free. Say goodbye to hosting
            fees and technical hurdles, and say hello to a streamlined,
            efficient way to bring your website to life.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <div className="flex space-x-4">
              <Link to={"/dynamic"}>
                <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                  Framework to Blogger Template
                </button>
              </Link>
              <Link to={"/static"}>
                <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                  Static Website to Blogger Template
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className=" border-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-900 hover:text-black">
        &copy; 2023 Your SaaS Name. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            {/* <a href="#" className="text-gray-400 hover:text-white"> */}
              <a href="#" className="text-black hover:text-black">
              Home
            </a>
            <a href="#" className="text-black">
              Documentation
            </a>
            <a href="#" className="text-black ">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
      {/* Footer */}
      {/* <footer className="border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center"> */}
            {/* <div className="flex items-center">
              <a href="/" className="font-bold text-xl">
                theFront
              </a>
              <span className="ml-4 text-sm text-gray-600">
                © theFront 2025. All rights reserved
              </span>
            </div> */}
            {/* <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Documentation
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default LandingPage;
