import './index.css';

function App() {
  return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
        <header className="text-center">
          <h1 className="text-5xl font-bold mb-4">Hello, I'm [Your Name]</h1>
          <p className="text-xl">A Passionate Developer and Learner</p>
        </header>

        <section className="mt-8 space-y-6">
          <div className="p-4 border border-gray-700 rounded-lg">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <ul className="mt-2">
              <li className="text-lg">• Project 1: <a href="#" className="text-blue-400">GitHub Link</a></li>
              <li className="text-lg">• Project 2: <a href="#" className="text-blue-400">GitHub Link</a></li>
            </ul>
          </div>

          <div className="p-4 border border-gray-700 rounded-lg">
            <h2 className="text-3xl font-semibold">Skills</h2>
            <p>JavaScript, React, Tailwind CSS, Git, etc.</p>
          </div>

          <div className="p-4 border border-gray-700 rounded-lg">
            <h2 className="text-3xl font-semibold">Contact Me</h2>
            <p>Email: your.email@example.com</p>
            <p>LinkedIn: <a href="#" className="text-blue-400">Your LinkedIn Profile</a></p>
          </div>
        </section>
      </div>
  );
}

export default App;