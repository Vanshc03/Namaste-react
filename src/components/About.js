export default function About() {
    return (
      <div className="About">
        <div className="About me">
          <div class="about-container bg-gradient-to-r from-blue-400 to-slate-300 rounded-xl p-3 m-4 mt-28 text-sm sm:text-base ">
            <div class="project-section ">
              <h2 class="section-heading font-bold">About GoodFood Project😀</h2>
              <p class="section-content">
                "GoodFood" is a React based webApp that I created for practice. The
                website features a configuration-driven user interface and
                utilizes the Swiggy API to fetch restaurant and menu data. It is a
                demo website for a food delivering company, showcasing key
                features like a config-driven UI, routing.
                <div className="text-sm sm:text-base">
                <ul>
                <p className="font-bold">😎 Key Features :</p>
                  <li>📌 Shimmer UI for Better UserExperience</li>
                  <li>📌 Search Feature</li>
                  {/* <li>📌 Checking network connection</li> */}
                  <li>📌 forms to contact</li>
                  <li>📌 Single page application</li>
                  {/* <li>
                    📌 Implemented Lazy Loading or OnDemand Loading on This Router
                  </li> */}
                </ul>
                <ul>
                  <p className="font-bold">💻 Technologies Used :</p>
                    <li>📌 React </li>
                  <li>📌 Redux for State Management</li>
                  {/* <li>📌 Checking network connection</li> */}
                  <li>📌 HTML, CSS, JavaScript</li>
                  <li>📌 Tailwind CSS</li>
                  {/* <li>
                    📌 Implemented Lazy Loading or OnDemand Loading on This Router
                  </li> */}
                </ul>
                </div>
                <div className="note">
                  <strong>Notice: Limited Menu Display</strong>
                  <p>
                    If you encounter shimmering UI instead of menus when clicking
                    on restaurants, it's likely a CORS (Cross-Origin Resource
                    Sharing) issue. To overcome this, use a VPN like Proton VPN
                    for uninterrupted access. Simply download, connect, and
                    refresh the page for a seamless experience. Thank you for your
                    understanding.
                  </p>
                </div>
              </p>
            </div>
  
            <div class="author-section">
              <h2 class="section-heading font-bold">About the Author - Vansh Chinta 😎</h2>
              <p class="section-content">
                I'm Vansh Chinta, a tech enthusiast fascinated by new
                technologies. My expertise spans languages such as C++, Java,
                JavaScript, React, HTML, CSS, and SQL. With touch typing skills
                and a typing speed of around 80+ words per minute, I am passionate
                about exploring and applying technology to solve real-world
                problems.
              </p>
              <div class="author-info">
                <strong>Technologies:</strong> C++, Java, JavaScript, React,
                HTML, CSS, SQL
                <br />
                <strong>Typing Speed:</strong> 80+ words per minute
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  