import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // ความเร็ว animation
      once: true,    // ให้เล่นแค่ครั้งแรก
    });
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contacts", href: "#contact" },
  ];

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/BG_Main.jpg')" }}
    >
      <div className="max-w-[1325px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Navbar */}
        <nav className="sticky top-3 z-50 bg-white/100 backdrop-blur-md rounded-xl shadow-md py-3 sm:py-4">
          <div className="max-w-screen-xl mx-auto px-2 sm:px-4 flex items-center justify-between">
            {/* ✅ Logo ชิดซ้าย พร้อมรูป */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              <img
                src="/portfolioo.png"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
              <span className="text-blue-500">Portfolio</span>
            </div>

            {/* ✅ Desktop Nav */}
            <div className="hidden md:flex ml-auto">
              <div className="rounded-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center space-x-6 sm:space-x-8 md:space-x-12 text-sm sm:text-base md:text-lg font-semibold tracking-wider">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href === "#home" ? "#home" : item.href}
                    onClick={(e) => {
                      setMenuOpen(false);

                      if (item.href === "#home") {
                        e.preventDefault(); // กันไม่ให้กระตุก
                        window.location.hash = "#home"; // บังคับเปลี่ยน URL
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="relative inline-block text-blue-900 underline-animate cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* ✅ Mobile Hamburger */}
            <button
              className="md:hidden text-2xl sm:text-3xl text-blue-700 ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* ✅ Mobile Menu */}
          {menuOpen && (
            <div className="mt-4 flex flex-col items-end space-y-3 sm:space-y-4 md:hidden px-2 sm:px-4">
              <div className="bg-white/50 backdrop-blur-md shadow-md rounded-xl px-4 sm:px-6 py-3 sm:py-4 w-full max-w-screen-xl mx-auto">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href !== "#home" ? item.href : undefined}
                    onClick={
                      item.href === "#home"
                        ? () => {
                            setMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        : () => {
                            setMenuOpen(false);
                          }
                    }
                    className="block text-base sm:text-lg font-semibold tracking-wider text-blue-900 underline-animate cursor-pointer py-2 sm:py-3"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* ✅ Main Content */}
        <main className="pt-0 space-y-10 pb-16">
          {/* Home Section */}
          <section
            id="home"
            className="mt-14 p-4 sm:p-8 md:p-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16"
          >
            {/* ✅ Profile Picture — fade-right */}
            <div
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl border-4 border-blue-500 overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src="/S__7880706.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ✅ Text Content — fade-up */}
            <div
              className="text-center md:text-left mt-6 md:mt-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text"
                style={{ lineHeight: "1.2" }}
              >
                Hi, My Name is <br className="hidden md:block" />
                Weerapat Arkomsansern
              </h1>

              <p
                className="mt-4 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg leading-relaxed md:leading-loose"
                style={{ lineHeight: "1.5" }}
              >
                ผมเชื่อว่าการออกแบบที่ดี โค้ดที่ชัดเจน และการตัดต่อที่มีเอกลักษณ์
                เมื่อเกิดจากความตั้งใจและลงมือทำด้วยตัวเอง
                จะสามารถเล่าเรื่องราวและสร้างความประทับใจได้ในทุกผลงาน!
              </p>

              {/* ✅ CTA + Socials */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-3 sm:gap-4">
                <a
                  href="#about"
                  className="bg-gradient-to-r from-blue-500 to-blue-950 text-white font-semibold px-5 sm:px-7 py-2 sm:py-3 rounded-full transition [background-size:200%_200%] hover:[animation:gradient-slide_2s_ease-in-out_infinite]"
                >
                  ดูเพิ่มเติม!
                </a>
              </div>
            </div>
          </section>

          {/* ✅ Marquee Section */}
          <div className="absolute left-0 right-0 w-full overflow-hidden bg-blue-50 py-6 sm:py-8 z-10">
            <div className="whitespace-nowrap animate-marquee text-blue-600 font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-wide">
              {[
                "GRAPHIC DESIGN",
                "PHOTOGRAPHER",
                "MOTION GRAPHIC",
                "WEBSITE DEVELOPER",
                "VIDEO EDITOR",
                "FRONT-END DEVELOPER",
                "UX/UI DESIGN",
              ].map((skill, index) => (
                <span key={index} className="inline-block px-4 sm:px-6 md:px-8">
                  <span className="inline-block animate-spin-reverse-slow mr-6 sm:mr-10">✱</span> {skill}
                </span>
              ))}
              {/* ทำซ้ำอีกครั้งเพื่อให้ Marquee ยาวต่อเนื่อง */}
              {[
                "GRAPHIC DESIGN",
                "PHOTOGRAPHER",
                "MOTION GRAPHIC",
                "WEBSITE DEVELOPER",
                "VIDEO EDITOR",
                "FRONT-END DEVELOPER",
                "UX/UI DESIGN",
              ].map((skill, index) => (
                <span key={`repeat-${index}`} className="inline-block px-4 sm:px-6 md:px-8">
                  <span className="inline-block animate-spin-reverse-slow mr-6 sm:mr-10">✱</span> {skill}
                </span>
              ))}
              {[
                "GRAPHIC DESIGN",
                "PHOTOGRAPHER",
                "MOTION GRAPHIC",
                "WEBSITE DEVELOPER",
                "VIDEO EDITOR",
                "FRONT-END DEVELOPER",
                "UX/UI DESIGN",
              ].map((skill, index) => (
                <span key={`repeat-${index}`} className="inline-block px-4 sm:px-6 md:px-8">
                  <span className="inline-block animate-spin-reverse-slow mr-6 sm:mr-10">✱</span> {skill}
                </span>
              ))}
              {[
                "GRAPHIC DESIGN",
                "PHOTOGRAPHER",
                "MOTION GRAPHIC",
                "WEBSITE DEVELOPER",
                "VIDEO EDITOR",
                "FRONT-END DEVELOPER",
                "UX/UI DESIGN",
              ].map((skill, index) => (
                <span key={`repeat-${index}`} className="inline-block px-4 sm:px-6 md:px-8">
                  <span className="inline-block animate-spin-reverse-slow mr-6 sm:mr-10">✱</span> {skill}
                </span>
              ))}
              {[
                "GRAPHIC DESIGN",
                "PHOTOGRAPHER",
                "MOTION GRAPHIC",
                "WEBSITE DEVELOPER",
                "VIDEO EDITOR",
                "FRONT-END DEVELOPER",
                "UX/UI DESIGN",
              ].map((skill, index) => (
                <span key={`repeat-${index}`} className="inline-block px-4 sm:px-6 md:px-8">
                  <span className="inline-block animate-spin-reverse-slow mr-6 sm:mr-10">✱</span> {skill}
                </span>
              ))}
              {[
                "GRAPHIC DESIGN",
                "PHOTOGRAPHER",
                "MOTION GRAPHIC",
                "WEBSITE DEVELOPER",
                "VIDEO EDITOR",
                "FRONT-END DEVELOPER",
                "UX/UI DESIGN",
              ].map((skill, index) => (
                <span key={`repeat-${index}`} className="inline-block px-4 sm:px-6 md:px-8">
                  <span className="inline-block animate-spin-reverse-slow mr-6 sm:mr-10">✱</span> {skill}
                </span>
              ))}
            </div>
          </div>
        </main>

        <main className="pt-20 space-y-10 pb-16">
          {/* Other sections... */}
          <section
            id="about"
            className="scroll-mt-24 px-4 sm:px-6 lg:px-8 mt-10 text-center"
          >
            {/* ✅ หัวข้อ About Me */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              About Me
            </h2>

            {/* ✅ วงกลมรูปภาพอยู่หลัง About */}
            <div
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto mt-4 rounded-full overflow-hidden border-4 border-blue-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/123456.jpg"
                alt="My Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-14">
              {/* กรอบซ้าย */}
              <div
                className="group flex-1 p-4 sm:p-6 bg-white border border-black/40 rounded-xl transition duration-300 hover:bg-blue-600 hover:border-blue-600"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex flex-col gap-3 sm:gap-4 text-left">
                  {/* ไอคอน */}
                  <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                    <img
                      src="/user1.png"
                      alt="Web Dev Icon"
                      className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src="/user2.png"
                      alt="Web Dev Icon Hover"
                      className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  {/* หัวข้อ */}
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-300">
                    Personal Information
                  </h3>

                  {/* รายละเอียด */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed group-hover:text-white transition-colors duration-100">
                    ชื่อ - สกุล : วีรภัทร อาคมสรรเสริญ<br />
                    ชื่อเล่น : ทีม<br />
                    วันเกิด : 6 มีนาคม 2547<br />
                    อายุ : 21 ปี<br />
                    กำลังศึกษาที่ : มหาวิทยาลัยกรุงเทพ ระดับชั้นปีที่ 4<br />
                    คณะ : เทคโนโลยีสารสนเทศและนวัตกรรม<br />
                    สาขาวิชา : วิทยาการคอมพิวเตอร์<br />
                    เกรดเฉลี่ยรวม : 3.28
                  </p>
                </div>
              </div>

              {/* กรอบขวา */}
              <div
                className="group flex-1 p-4 sm:p-6 bg-white border border-black/40 rounded-xl transition duration-300 hover:bg-blue-600 hover:border-blue-600"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="flex flex-col gap-3 sm:gap-4 text-left">
                  {/* ไอคอน */}
                  <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                    <img
                      src="/information-button1.png"
                      alt="UI/UX Icon Default"
                      className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src="/information-button2.png"
                      alt="UI/UX Icon Hover"
                      className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  {/* หัวข้อ */}
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-300">
                    About me
                  </h3>

                  {/* รายละเอียด */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed group-hover:text-white transition-colors duration-100">
                    ผมเป็นคนที่ชอบเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ และมักจะลงมือทำทุกอย่างด้วยตัวเอง
                    ตลอดช่วงที่ผ่านมา ผมได้ฝึกฝนเรียนรู้ไม่เว้นแต่ละวันรวมถึงไม่เคยย่อท้อ
                    ตั้งแต่การออกแบบ เขียนโค้ด ช่างถ่ายรูป ตัดต่อวิดีโอ ไปจนถึงการเกรดสีภาพ
                    ผมพยายามใส่ใจในทุกขั้นตอนให้มากที่สุด เพราะผมเชื่อว่างานที่ดีต้องเริ่มจากความตั้งใจ
                    ทุกชิ้นงานที่คุณจะได้เห็นต่อจากนี้ ผมลงมือทำเองทั้งหมด
                    และหวังว่าจะถ่ายทอดตัวตนของผมผ่านงานเหล่านี้ได้อย่างดีที่สุด
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="scroll-mt-24 p-4 sm:p-8 mt-10 text-center text-gray-800"
          >
            <h2
              className="text-4xl sm:text-5xl md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text"
              data-aos="fade- up"
              data-aos-delay="200"
            >
              Skills
            </h2>

            {/* ✅ 2 row × 2 col */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10 text-left">

              {/* ✅ Soft Skills (ซ้ายบน) */}
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-blue-500 transition-colors duration-300"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Soft Skill
                </h3>
                <ul
                  className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 list-none text-base sm:text-lg"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <li>📚 มีความกระตือรือร้นในการเรียนรู้สิ่งใหม่ๆ อยู่เสมอ</li>
                  <li>🛠️ นำความรู้ที่ได้มาประยุกต์ใช้และลงมือปฏิบัติจริงเพื่อสร้างผลลัพธ์ที่เป็นรูปธรรม</li>
                  <li>🎯 มีความมุ่งมั่นและรับผิดชอบสูงในการทำงานที่ได้รับมอบหมาย</li>
                  <li>🧠 วิเคราะห์ปัญหาได้อย่างเป็นระบบ และนำเสนอแนวคิดใหม่ๆ ที่สร้างสรรค์</li>
                  <li>🔄 ปรับตัวเข้ากับสถานการณ์และสภาพแวดล้อมที่เปลี่ยนแปลงไปได้อย่างรวดเร็ว</li>
                  <li>🗣️ มีทักษะการสื่อสารที่ดี รับฟังและทำงานร่วมกับผู้อื่นได้อย่างราบรื่น</li>
                  <li>⏱️ จัดลำดับความสำคัญของงาน และบริหารจัดการเวลาได้อย่างมีประสิทธิภาพ</li>
                  <li>💡 มีแรงบันดาลใจและความมุ่งมั่นจากภายในตนเองในการทำงานให้สำเร็จ</li>
                </ul>
              </div>

              {/* ✅ Coding Skills (ขวาบน) */}
              <div className="mt-8 md:mt-0">
                <h3
                  className="text-xl sm:text-2xl font-bold text-blue-500 transition-colors duration-300"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  Coding Skill
                </h3>
                <div
                  className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  {[
                    { name: "Python", icon: "/python.png" },
                    { name: "Java", icon: "/java.png" },
                    { name: "JavaScript", icon: "/java-script.png" },
                    { name: "HTML", icon: "/html.png" },
                    { name: "C#", icon: "/c-sharp.png" },
                    { name: "CSS", icon: "/css-3.png" },
                    { name: "SQLite", icon: "/SQLite.png" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 rounded-xl p-4 flex flex-col items-center text-center shadow hover:scale-105 transition-transform duration-300"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
                      <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ Tools (แถวล่าง เต็มความกว้าง) */}
              <div className="md:col-span-2 mt-8 md:mt-12 w-full">
                <h3
                  className="text-xl sm:text-2xl font-bold text-blue-500 transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Tool
                </h3>

                {/* ใช้ auto-fit ให้กินพื้นที่เต็มบรรทัด */}
                <div
                  className="mt-4 sm:mt-6 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3 sm:gap-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {[
                    { name: "Adobe Premiere Pro", icon: "/premiere-pro.png" },
                    { name: "Adobe PhotoShop", icon: "/photoshop.png" },
                    { name: "Adobe Illustrator", icon: "/illustrator.png" },
                    { name: "Adobe Lightroom", icon: "/photoshop-lightroom.png" },
                    { name: "Adobe Media Encoder", icon: "/media-encoder.png" },
                    { name: "Visual Studio Code", icon: "/vscode.png" },
                    { name: "Visual Studio 2022", icon: "/logo.png" },
                    { name: "Microsoft Excel", icon: "/excel.png" },
                    { name: "Figma", icon: "/figma.png" },
                    { name: "React", icon: "/science.png" },
                    { name: ".Net Maui", icon: "/microsoft-dot-net-icon.png" },
                    { name: "Github", icon: "/github-sign.png" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="w-full bg-blue-100 rounded-xl p-3 sm:p-4 flex flex-col items-center text-center shadow hover:scale-105 transition-transform duration-300"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
                      <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-24 p-4 sm:p-8 mt-14 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-4xl sm:text-5xl md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text">
              Experience
            </h2>

            {/* Grid container */}
            <div className="grid grid-cols-1 gap-12 mt-12 text-left">

              {/* UX/UI Design – NEW FIRST COLUMN */}
              <div data-aos="fade-up" data-aos-delay="150">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-6 sm:mb-8">
                  UX/UI Design – Creative Interface & Prototype Design
                </h3>

                <div className="bg-blue-100 p-4 sm:p-6 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 shadow-lg">
                  
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src="/Figma_1.png"
                      alt="UX/UI Preview"
                      className="w-full max-w-sm sm:max-w-xl rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1" data-aos="fade-up" data-aos-delay="250">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      UX/UI Design By Figma
                    </h3>

                    <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mt-4 md:mt-6">
                      ออกแบบ UX/UI สำหรับเว็บไซต์ แอปพลิเคชัน สไลด์นำเสนองาน และอื่นๆอีกมากมาย โดยเน้นความสวยงาม ใช้งานง่าย และตอบโจทย์ผู้ใช้งาน<br />
                      • ออกแบบ Wireframe Prototype ด้วย Figma<br />
                      • สร้าง Design System, UI Components, Layout<br />
                      • วางโครงสร้าง UX ให้มี Flow ที่เข้าใจง่ายและเหมาะกับผู้ใช้งานจริง<br />
                      • นอกจากการออกแบบ Ux/Ui ยังสามารถทำสไลด์ประกอบการนำเสนอได้อีกด้วย<br />

                      {/* ⭐️ ลิงก์ใหม่ที่เพิ่ม */}
                      <a
                        href="https://www.figma.com/design/F6SVYJBILy11M3oZvkzhPt/Ux-Ui-Design?node-id=3-23&t=ijS1zPKDzlwyrKzz-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
                      >
                        ➡️ ดูตัวอย่างงานออกแบบเพิ่มเติมได้ที่นี่! ⬅️
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Website Developer */}
              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-6 sm:mb-8 text-left">
                  Website Developer -  UDetectionNews Website & Flood Alert Website
                </h3>
                <div className="flex flex-col gap-8">
                  {/* ========= BOX 1 ========= */}
                  <div className="bg-blue-100 p-4 sm:p-6 rounded-xl flex flex-col items-center gap-6 shadow-lg">
                  {/* แถวที่ 1 – รูปภาพ */}
                  <div className="flex flex-row gap-4 sm:gap-8 items-center">
                    <img
                      src="/หน้าแรก.png"
                      alt="Website Developer Preview"
                      className="w-full max-w-lg rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    />

                    <img
                      src="/หน้าเลือกเมนูตรวจสอบข้อความข่าว.png"
                      alt="Website Developer Preview"
                      className="w-full max-w-lg rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    />
                  </div>
                  {/* แถวที่ 2 – ข้อความ */}
                  <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed text-left w-full">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug text-left">
                      UDetectionNews Website
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl leading-loose">
                      เว็บไซต์การให้บริการวิเคราะห์และตรวจจับข่าวเท็จ ใช้สำหรับตรวจสอบว่า “ข่าวจริงหรือข่าวปลอม” จากข้อความ(Text) ลิงก์เว็บไซต์(Link URL) พร้อมให้เหตุผลประกอบ และโชว์แหล่งข่าวที่ใกล้เคียง<br />
                      • ใช้ Firebase + React<br />
                      • ระบบ Authentication และ Dashboard
                    </p>
                  </div>
                </div>
                {/* ========= BOX 2 ========= */}
                  <div className="bg-blue-100 p-4 sm:p-6 rounded-xl flex flex-col items-center gap-4 sm:gap-8 shadow-lg">
                    <img
                      src="/Screenshot 2024-07-28 151743.png"
                      alt="Website Developer Preview"
                      className="w-full max-w-sm sm:max-w-xl rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    />
                    <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed text-left w-full">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug text-left">
                        Flood Alert Website
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl leading-loose">
                        เว็บไซต์แจ้งเตือนน้ำท่วมแบบ Real-time พัฒนาด้วย React.js + Vite + Tailwind<br />
                        • พัฒนาทั้ง Front-end และ Database<br />
                        • เรียนรู้ React Libraries, Bootstrap และการ Deploy บน Github
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Application – MOVED DOWN */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-6 sm:mb-8">
                  Mobile Application Developer - Managing daily mission notification
                </h3>
                <div className="bg-blue-100 p-4 sm:p-6 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 shadow-lg">
                  {/* Left Image */}
                  <div className="flex-shrink-0">
                    <img
                      src="/1.png"
                      alt="Mobile Application Preview"
                      className="w-full sm:w-40 md:w-48 rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    />
                  </div>

                  {/* Middle Image */}
                  <div className="flex-shrink-0">
                    <img
                      src="/5.png"
                      alt="Mobile Application Preview"
                      className="w-full sm:w-40 md:w-48 rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    />
                  </div>

                  {/* Right Text */}
                  <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      Next Step Application
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mt-4 md:mt-6">
                      เป็นโปรเจกต์รายวิชาที่มุ่งเน้นการสร้างแอปพลิเคชันบนมือถือ เพื่อให้ผู้ใช้สามารถบริหารเวลาได้อย่างมีประสิทธิภาพ<br />
                      • พัฒนาแอปด้วย Visual Studio 2022<br />
                      • ฝึกทักษะการเขียน Logic ด้วยภาษา C#<br />
                      • ฝึกทักษะการทำงานร่วมกันในทีมเพื่อเพิ่มประสิทธิภาพการทำงาน
                    </p>
                  </div>
                </div>
              </div>

              {/* Python Developer */}
              <div data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-6 sm:mb-8 text-left">
                  Python Developer - Desktop Simulation System with Tkinter Python
                </h3>
                <div className="bg-blue-100 p-4 sm:p-6 rounded-xl flex flex-col items-center gap-4 sm:gap-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full">
                    <img
                      src="/11111.png"
                      alt="Python Developer Preview"
                      className="w-full sm:w-2/5 max-w-md rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    />
                    <img
                      src="/Screenshot 2025-09-10 193058.png"
                      alt="Python Developer Preview"
                      className="w-full sm:w-2/5 max-w-md rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    />
                  </div>
                  <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed text-left w-full">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug text-left">
                      BTS & MRT Ticketing Simulation System
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl leading-loose">
                      ระบบจำลองการซื้อตั๋วรถไฟฟ้าด้วย Python + Tkinter<br />
                      • ฝึก Full-stack และการใช้ Database (DB Browser SQL)<br />
                      • ออกแบบ UX/UI ด้วย Figma และ Photoshop<br />
                      • ทำงานร่วมกับเพื่อนร่วมทีมอย่างมีประสิทธิภาพ
                    </p>
                  </div>
                </div>
              </div>

              {/* Java Developer */}
              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-6 sm:mb-8 text-left">
                  Java Developer - A Desktop Application for a Game Trading Simulation System
                </h3>
                <div className="bg-blue-100 p-4 sm:p-6 rounded-xl flex flex-col items-center gap-4 sm:gap-6 shadow-lg">
                  <img
                    src="/Screenshot 2024-07-22 011545.png"
                    alt="Java Developer Preview"
                    className="w-full max-w-sm sm:max-w-xl rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  />
                  <div className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed text-left w-full">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-snug text-left">
                      Game Trading Simulation System
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl leading-loose">
                      เป็นโปรเจกต์รายวิชาที่มุ่งเน้นการสร้าง Desktop Application ด้วยภาษา Java<br />
                      • เรียนรู้ OOP และการเชื่อมต่อ Database<br />
                      • ออกแบบ UX/UI ด้วย Figma และ Photoshop<br />
                      • ฝึกทักษะการทำงานเป็นทีม
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="work-experience"
            className="scroll-mt-24 p-6 sm:p-8 mt-14 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-4xl sm:text-5xl md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text">
              Work Experience
            </h2>

            {/* ✅ กล่องให้เรียงเป็นแถวเดียว */}
            <div className="flex flex-col gap-12 mt-10 text-left px-2 sm:px-4">

              {/* ✅ Editor & Graphic Design */}
              <div data-aos="fade-up" data-aos-delay="600">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-6 sm:mb-8">
                  Video Editor & Graphic Design - Aiyara Gems Co., Ltd.
                </h3>
                <div className="bg-blue-100 p-4 sm:p-6 rounded-xl flex flex-col items-center shadow-lg">
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center w-full">
                    <img
                      src="/12.png"
                      alt="Editor & Graphic Design Preview"
                      className="w-full md:w-1/2 max-w-lg rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    />
                    <img
                      src="/Screenshot 2025-09-11 173650.png"
                      alt="Editor & Graphic Design Preview"
                      className="w-full md:w-1/2 max-w-lg rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    />
                  </div>
                  <div className="text-gray-800 text-base sm:text-lg leading-relaxed text-left mt-2 md:mt-3">
                    <p className="text-base sm:text-lg leading-loose">
                      ผมมีประสบการณ์การทำงานจริงจากบริษัท Aiyara Gems ซึ่งเป็นบริษัทสายอินฟลูเอนเซอร์ขายเพชรและเครื่องประดับต่างๆ
                      ผมเริ่มเข้าทำงานที่นี่ตั้งแต่เดือนมิถุนายนปี 2565 มาจนถึงปัจจุบัน และได้สะสมประสบการณ์ทักษะที่จำเป็น ไม่ว่าจะเป็น<br />
                      • การนำเสนอผลงานและพูดคุยกับ CEO บริษัทในเรื่องของการทำงานข้ามสายงานไม่ตรงกับสาขาที่เรียน<br />
                      • ได้ทำงานร่วมกันเป็นทีมในแต่ละโปรเจกต์ของบริษัท<br />
                      • ได้ออกแบบและดีไซน์จริง ได้ลงมือปฎิบัติจริงนอกเหนือจากสิ่งที่เรียนในห้องเรียน<br />
                      • ได้ฝึกทักษะจินตนาการสร้างสรรค์ลงในผลงาน และถ่ายทอดผลงานออกสื่อโซเชียลมีเดียจริง<br /><br />
                      ⬇️ดูผลงานได้ผ่านลิงก์ด้านล่างนี้⬇️<br />
                      {"Madamtoon_official มาดามตูนยอดคนสมองเพชร"}<br />
                      🔗{" "}
                      <a
                        href="https://www.tiktok.com/@madamtoon_official"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        madamtoon_official
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Photography & Retouching */}
              <div data-aos="fade-up" data-aos-delay="700">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-6 sm:mb-8">
                  Photographer & Graphic Design - RC Store & KP Store Mobile Phone Repair Services
                </h3>
                <div className="bg-blue-100 p-4 sm:p-6 rounded-xl flex flex-col lg:flex-row items-start gap-4 lg:gap-8 shadow-lg">
                  <img
                    src="/FB4CF4DF-B224-4593-A23F-97C055F0755B.jpg"
                    alt="Photographer Preview"
                    className="w-full sm:w-80 lg:w-64 rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  />
                  <div className="text-gray-800 text-base sm:text-lg leading-relaxed text-left">
                    <p className="text-base sm:text-lg leading-loose">
                      ผมได้มีประสบการณ์การรับงานฟรีแลนซ์ ซึ่งงานนี้เป็นงานที่ท้าทายตัวผมเป็นอย่างมาก ผมได้เรียนรู้การถ่ายภาพแนว Portrait เรียนรู้การใช้<br />
                      กล้องดิจิทัล การจัดวางไฟและองค์ประกอบต่างๆ เพื่อปรับแสง สี รายละเอียดให้ดีที่สุด และตรงตามความต้องการของผู้ใช้<br />
                      • ได้เก็บเกี่ยวประสบการณ์การถ่ายงานแบบภาพนิ่ง<br />
                      • ได้ฝึกทักษะการสื่อสารพูดคุยเกี่ยวกับงาน ตามที่ผู้ใช้งานอยากได้<br />
                      • ได้ออกแบบดีไซน์โลโก้ตามบรีฟที่ได้รับให้กับผู้ใช้<br />
                      • ฝึกทักษะการแต่งภาพและเกรดสีภาพ ด้วย Adobe Lightroom<br />
                      • ฝึกทักษะการไดคัทและรีทัชภาพ ด้วย Adobe Photoshop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="scroll-mt-24 p-8 mt-14 mb-16 text-center text-gray-800"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-[36px] sm:text-[42px] md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text">
              Contacts
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-x-12 lg:gap-x-24 justify-items-center">

              {/* Email */}
              <div className="flex flex-col items-center" data-aos="fade-right" data-aos-delay="200">
                <img
                  src="/mail.png"
                  alt="Email Icon"
                  className="w-12 h-12 md:w-14 md:h-14 mb-4"
                />
                <a
                  href="mailto:weerapatak47@gmail.com"
                  className="text-blue-600 underline text-base md:text-lg"
                >
                  weerapatak47@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="/phone.png"
                  alt="Phone Icon"
                  className="w-12 h-12 md:w-14 md:h-14 mb-4"
                />
                <p className="text-base md:text-lg">086-466-3853</p>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="/linkedinn.png"
                  alt="LinkedIn Icon"
                  className="w-12 h-12 md:w-14 md:h-14 mb-4"
                />
                <a
                  href="https://www.linkedin.com/in/weerapat-arkomsansern-836446380/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-base md:text-lg break-all"
                >
                  linkedin.com/in/weerapatak
                </a>
              </div>

              {/* GitHub */}
              <div className="flex flex-col items-center" data-aos="fade-left" data-aos-delay="200">
                <img
                  src="/github-sign.png"
                  alt="GitHub Icon"
                  className="w-12 h-12 md:w-14 md:h-14 mb-4"
                />
                <a
                  href="https://github.com/weerapatak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-base md:text-lg break-all"
                >
                  github.com/weerapatak
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ✅ Footer */}
      <footer className="bg-[#00255d] text-white py-10 md:py-12 relative">
        <div className="w-full px-4 text-center space-y-6 md:space-y-8">
          
          {/* Logo */}
          <div className="flex justify-center">
            <img 
              src="/portfolioo.png" 
              alt="Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20" 
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 font-semibold text-white text-sm sm:text-base">
            {navItems.map((item) => (
              item.href === "#home" ? (
                <a
                  key={item.href}
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault(); // กันไม่ให้ browser กระตุก
                    window.location.hash = "#home"; // บังคับเปลี่ยน URL
                    window.scrollTo({ top: 0, behavior: "smooth" }); // เลื่อนกลับขึ้นบนสุด
                  }}
                  className="relative inline-block underline-animate cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative inline-block underline-animate"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm sm:text-base text-blue-400">
            © 2025 Website developed by{" "}
            <span className="text-blue-300 font-medium">
              Weerapat Arkomsansern
            </span>
          </p>
        </div>

        {/* Scroll to top button */}
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-8 w-10 h-10 rounded-full ring-2 ring-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in-out transform ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          ↑
        </a>
      </footer>
    </div>
  );
}

export default App;