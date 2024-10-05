import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function CompanyProfile() {
  const [companyName, setCompanyName] = useState('Sisyphus Ventures');
  const [companyUrl, setCompanyUrl] = useState('sisyphus');
  const [twitterHandle, setTwitterHandle] = useState('sisyphusvc');
  const [facebookHandle, setFacebookHandle] = useState('sisyphusvc');
  const [linkedinHandle, setLinkedinHandle] = useState('sisyphusvc');
  const [includeInReports, setIncludeInReports] = useState(true);
  const [includeInEmails, setIncludeInEmails] = useState(true);

  const [twitter, setTwitter] = useState('sisyphusvc');
  const [facebook, setFacebook] = useState('sisyphusvc');
  const [linkedin, setLinkedin] = useState('sisyphusvc');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitted:', { twitter, facebook, linkedin });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-width Header with Custom Background */}
      <header
        className="w-full h-48 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto h-full">
          <div className="h-full w-full bg-cover bg-center opacity-90"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-[-50px] z-10 p-8">
        {/* Profile Information */}
        <div className="relative mb-8">
          <div className="absolute -top-16 left-8">
            <img
              src="https://wallpapers.com/images/featured/cute-profile-picture-s52z1uggme5sj92d.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
          </div>
          <div className="ml-44 mt-4">
            <h1 className="text-3xl font-bold">{companyName}</h1>
            <a href={`https://untitledui.com/${companyUrl}`} className="text-blue-500 hover:underline">
              {`untitledui.com/${companyUrl}`}
            </a>
          </div>
          <button className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Edit Profile
          </button>
        </div>


        <h2 className="text-2xl font-semibold mb-2">Company Profile</h2>
        <p className="text-gray-600 mb-6">Update your company photo and details here.</p>

        {/*Horizontal line*/}
        <div className="-mx-4 border-b border-gray-300 my-4"></div> {/* Adjust margin as necessary */}

        {/* Public Profile Section */}
        <div className="border-b-2 border-gray-300 pb-3 flex items-center space-x-12">
          {/* Label and description on the left */}
          <div className="flex-shrink-0 py-12">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Public profile</h2>
            <p className="text-sm text-gray-500">This will be displayed on your profile.</p>
          </div>

          {/* Input fields beside the label */}
          <div className="flex-grow space-y-3">
            <div>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company Name"
              />
            </div>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                untitledui.com/
              </span>
              <input
                type="text"
                value={companyUrl}
                onChange={(e) => setCompanyUrl(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company URL"
              />
            </div>
          </div>
        </div>

        {/* Company Logo Section */}
        <div className="flex items-start space-x-12 py-12">
          {/* Company Logo Label */}
          <div className="flex-shrink-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Company logo</h2>
            <p className="text-sm text-gray-500 mb-6">Update your company logo and choose where to display it.</p>
          </div>

          {/* Company Logo SVG */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
          </div>

          {/* Upload Box */}
          <div className="flex-grow">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors duration-200 cursor-pointer">
              <Upload className="mx-auto h-8 w-8 text-gray-400" />
              <p className="mt-1 text-sm text-gray-500">
                <span className="font-medium text-blue-600 hover:underline">Click to upload</span> or drag and drop
              </p>
              <p className="mt-1 text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>
        </div>
             {/* Horizontal Line */}
  <div className="w-full border-b border-gray-300 my-4"></div> {/* This is your horizontal line */}

        {/* Branding Section */}
        <div className="p-6">
          <div className=" pb-3 flex items-center space-x-32">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Branding</h2>
              <p className="text-sm text-gray-500">Add your logo to reports and emails.</p>
              <button className="text-sm text-blue-600 hover:text-blue-800 mt-1">
                View examples
              </button>
            </div>
            <div className="space-y-2">
              <label className="flex items-center justify-start">
                <input
                  type="checkbox"
                  checked={includeInReports}
                  onChange={() => setIncludeInReports(!includeInReports)}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded"
                />
                <span className="mr-2 text-sm text-gray-700">Reports</span>
              </label>
              <p className="text-xs text-gray-500 text-right">Include my logo in summary reports.</p>

              <label className="flex items-center justify-start">
                <input
                  type="checkbox"
                  checked={includeInEmails}
                  onChange={() => setIncludeInEmails(!includeInEmails)}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded"
                />
                <span className="mr-2 text-sm text-gray-700">Emails</span>
              </label>
              <p className="text-xs text-gray-500 text-right">Include my logo in customer emails.</p>
            </div>
          </div>

        </div>

      {/* Horizontal Line */}
 <    div className="w-full border-b border-gray-300 my-4"></div> {/* This is your horizontal line */}

        {/* Social Profiles Section */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex items-start mb-6">
              <h2 className="text-xl font-semibold w-1/4">Social profiles</h2>
              <div className="w-3/4 space-y-4">
                
              <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                twitter.com/
              </span>
              <input
                type="text"
                value={companyUrl}
                onChange={(e) => setCompanyUrl(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company URL"
              />
            </div>
                <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                facebook.com/
              </span>
              <input
                type="text"
                value={companyUrl}
                onChange={(e) => setCompanyUrl(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company URL"
              />
            </div>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                linkedin.com/company/
              </span>
              <input
                type="text"
                value={companyUrl}
                onChange={(e) => setCompanyUrl(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company URL"
              />
            </div>
  
              </div>
            </div>

             {/* Horizontal Line */}
             <div className="-mx-20 border-b border-gray-300 my-4"></div> {/* Adjust margin as necessary */}


            <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save changes
          </button>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
}
