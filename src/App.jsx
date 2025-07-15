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
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/BG_Main.jpg')" }}
    >
      <div className="max-w-[1325px] mx-auto px-4">
        {/* ✅ Navbar */}
        <nav className="sticky top-3 z-50 bg-white/100 backdrop-blur-md rounded-xl shadow-md py-3">
          <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
            {/* ✅ Logo ชิดซ้าย พร้อมรูป */}
            <div className="flex items-center space-x-4 text-2xl md:text-4xl font-bold cursor-default select-none">
              <img src="/portfolioo.png" alt="Logo" className="w-12 h-12 md:w-14 md:h-14" />
              <span className="text-blue-500">Portfolio</span>
            </div>

            {/* ✅ Desktop Nav */}
            <div className="hidden md:flex ml-auto">
              <div className="rounded-xl px-6 py-2 flex items-center space-x-12 text-base font-semibold tracking-wider">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href !== "#home" ? item.href : undefined}
                    onClick={
                      item.href === "#home"
                        ? () => {
                          setMenuOpen(false); // ปิดเมนูบนมือถือ
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        : () => {
                          setMenuOpen(false); // ปิดเมนูบนมือถือสำหรับลิงก์อื่น
                        }
                    }
                    className="relative inline-block text-base font-semibold tracking-wider text-blue-900 underline-animate cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* ✅ Mobile Hamburger */}
            <button
              className="md:hidden text-2xl text-blue-700 ml-auto"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* ✅ Mobile Menu */}
          {menuOpen && (
            <div className="mt-4 flex flex-col items-end space-y-4 md:hidden px-4">
              <div className="bg-white/50 backdrop-blur-md shadow-md rounded-xl px-4 py-4 w-full max-w-screen-xl mx-auto">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href !== "#home" ? item.href : undefined}
                    onClick={
                      item.href === "#home"
                        ? () => {
                          setMenuOpen(false); // ปิดเมนูบนมือถือ
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        : () => {
                          setMenuOpen(false); // ปิดเมนูบนมือถือสำหรับลิงก์อื่น
                        }
                    }
                    className="relative inline-block text-base font-semibold tracking-wider text-blue-900 underline-animate cursor-pointer"
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
            className="mt-14 p-8 md:p-20 flex justify-center items-center gap-16"
          >
            {/* ✅ Profile Picture — fade-right */}
            <div
              className="w-56 h-56 md:w-80 md:h-80 rounded-xl border-4 border-blue-500 overflow-hidden"
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
              className="text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className="text-[48px] md:text-[58px] font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text"
                style={{ lineHeight: "1.2" }}
              >
                Hi, My Name is <br className="hidden md:block" />
                Weerapat Arkomsansern
              </h1>

              <p
                className="mt-4 text-gray-800 text-lg md:text-xl max-w-xl leading-loose"
                style={{ lineHeight: "1.5" }}
              >
                ผมเชื่อว่าการออกแบบที่ดี โค้ดที่ชัดเจน และการตัดต่อที่มีเอกลักษณ์
                เมื่อเกิดจากความตั้งใจและลงมือทำด้วยตัวเอง
                จะสามารถเล่าเรื่องราวและสร้างความประทับใจได้ในทุกผลงาน!
              </p>

              {/* ✅ CTA + Socials */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-4">
                <a
                  href="#about"
                  className="bg-gradient-to-r from-blue-500 to-blue-950 text-white font-semibold px-7 py-3 rounded-full transition [background-size:200%_200%] hover:[animation:gradient-slide_2s_ease-in-out_infinite]">
                  ดูเพิ่มเติม!
                </a>
              </div>
            </div>
          </section>

          <div className="absolute  left-0 right-0 w-full overflow-hidden bg-blue-50 py-10 z-10">
            <div className="whitespace-nowrap animate-marquee text-blue-600 font-bold text-lg tracking-wide">
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DEVELOPMENT
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBFLOW
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PROGRAMMER
              </span>

              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DEVELOPMENT
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBFLOW
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PROGRAMMER
              </span>

              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DEVELOPMENT
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBFLOW
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PROGRAMMER
              </span>

              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DEVELOPMENT
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBFLOW
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PROGRAMMER
              </span>

              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> DEVELOPMENT
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBFLOW
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PROGRAMMER
              </span>
            </div>
          </div>
        </main>

        <main>
          <main className="pt-20 space-y-10 pb-16"></main>
          {/* Other sections... */}
          <section
            id="about"
            className="scroll-mt-24 p-8 mt-10 text-center"
          >
            {/* ✅ หัวข้อ About Me ก่อน */}
            <h2
              className="text-[48px] md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              About Me
            </h2>

            {/* ✅ วงกลมรูปภาพอยู่หลัง About — ลด mt-10 → mt-4 */}
            <div
              className="w-56 h-56 mx-auto mt-4 rounded-full overflow-hidden border-4 border-blue-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/123456.jpg"
                alt="My Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-14">
              {/* กรอบซ้าย */}
              <div className="group flex-1 p-6 bg-white border border-black/40 rounded-xl transition duration-300 hover:bg-blue-600 hover:border-blue-600"
                data-aos="fade-right"
                data-aos-delay="200">
                <div className="flex flex-col gap-4 text-left">
                  {/* ไอคอน */}
                  <div className="relative w-8 h-8">
                    <img
                      src="/user1.png"
                      alt="Web Dev Icon"
                      className="absolute top-0 left-0 w-8 h-8 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src="/user2.png"
                      alt="Web Dev Icon Hover"
                      className="absolute top-0 left-0 w-8 h-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  {/* หัวข้อ */}
                  <h3 className="text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-300">
                    Personal Information
                  </h3>

                  {/* รายละเอียด */}
                  <p className="text-lg text-gray-800 leading-relaxed group-hover:text-white transition-colors duration-100">
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
              <div className="group flex-1 p-6 bg-white border border-black/40 rounded-xl transition duration-300 hover:bg-blue-600 hover:border-blue-600"
                data-aos="fade-left"
                data-aos-delay="200">
                <div className="flex flex-col gap-4 text-left">
                  {/* ไอคอน */}
                  <div className="relative w-10 h-10 group">
                    <img
                      src="/information-button1.png"
                      alt="UI/UX Icon Default"
                      className="absolute top-0 left-0 w-8 h-8 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src="/information-button2.png"
                      alt="UI/UX Icon Hover"
                      className="absolute top-0 left-0 w-8 h-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  {/* หัวข้อ */}
                  <h3 className="text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-300">
                    About me
                  </h3>

                  {/* รายละเอียด */}
                  <p className="text-lg text-gray-800 leading-relaxed group-hover:text-white transition-colors duration-100">
                    ผมเป็นคนที่ชอบเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ และมักจะลงมือทำทุกอย่างด้วยตัวเอง
                    ตลอดช่วงที่ผ่านมา ผมได้ลองทำงานจริงหลายด้านในบริษัทที่ทำงานอยู่
                    ไม่ว่าจะเป็น Backend, Frontend, UX/UI หรือแม้แต่ Motion Graphic
                    ผมก็ไม่เคยถอย ตั้งแต่การออกแบบ เขียนโค้ด ถ่ายภาพ ตัดต่อวิดีโอ ไปจนถึงปรับสี เกลี่ยสี
                    ผมพยายามใส่ใจในทุกขั้นตอนให้มากที่สุด เพราะผมเชื่อว่างานที่ดีต้องเริ่มจากความตั้งใจ
                    ทุกชิ้นงานที่คุณจะได้เห็นต่อจากนี้ ผมลงมือทำเองทั้งหมด และหวังว่าจะถ่ายทอดตัวตนของผมผ่านงานเหล่านี้ได้อย่างดีที่สุด
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="scroll-mt-24 p-8 mt-14 text-center text-gray-800"
          >
            <h2 className="text-[48px] md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="200">My Skills</h2>
            <div className="grid md:grid-cols-3 gap-12 mt-12 text-left">
              {/* ✅ Soft Skills - ซ้าย */}
              <div>
                <h3 className="text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-300"
                  data-aos="fade-right"
                  data-aos-delay="200">
                  Soft Skills
                </h3>
                <ul className="mt-6 space-y-3 list-none text-lg"
                  data-aos="fade-right"
                  data-aos-delay="200">
                  <li>📚 รักการเรียนรู้</li>
                  <li>🛠️ ลงมือทำจริง</li>
                  <li>🎯 ตั้งใจทำงาน</li>
                  <li>🧠 มีความคิดวิเคราะห์และสร้างสรรค์</li>
                  <li>🔄 ยืดหยุ่น ปรับตัวได้ดี</li>
                  <li>🗣️ สื่อสารเป็นธรรมชาติ</li>
                  <li>⏱️ บริหารเวลาและขั้นตอนงานได้ดี</li>
                  <li>💡 มี Passion / แรงจูงใจจากภายใน</li>
                </ul>
              </div>

              {/* ✅ Tools - กลาง */}
              <div>
                <h3 className="text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200">
                  Tools
                </h3>
                <div className="mt-6 grid grid-cols-3 gap-4"
                  data-aos="fade-up"
                  data-aos-delay="200">
                  {[
                    { name: "Adobe Premiere Pro", icon: "/premiere-pro.png" },
                    { name: "Adobe PhotoShop", icon: "/photoshop.png" },
                    { name: "Adobe Illustrator", icon: "/illustrator.png" },
                    { name: "Adobe Lightroom", icon: "/photoshop-lightroom.png" },
                    { name: "Visual Studio Code", icon: "/vscode.png" },
                    { name: "Visual Studio 2022", icon: "/logo.png" },
                    { name: "Figma", icon: "/figma.png" },
                    { name: "Github", icon: "/github-sign.png" },
                    { name: "Microsoft Excel", icon: "/excel.png" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 rounded-xl p-4 flex flex-col items-center text-center shadow hover:scale-105 transition-transform duration-300"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                      <p className="text-sm font-semibold text-gray-800 mt-1">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ Coding Skills - ขวา */}
              <div>
                <h3 className="text-2xl font-bold text-blue-500 group-hover:text-white transition-colors duration-300"
                  data-aos="fade-left"
                  data-aos-delay="200">
                  Coding Skills
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-6"
                  data-aos="fade-left"
                  data-aos-delay="200">
                  {[
                    { name: "Python", icon: "/python.png" },
                    { name: "Java", icon: "/java.png" },
                    { name: "JavaScript", icon: "/java-script.png" },
                    { name: "HTML", icon: "/html.png" },
                    { name: "CSS", icon: "/css-3.png" },
                    { name: "SQLite", icon: "/SQLite.png" },
                    { name: "React", icon: "science.png" },
                    { name: ".Net Maui", icon: "/microsoft-dot-net-icon.png" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 rounded-xl p-4 flex flex-col items-center text-center shadow hover:scale-105 transition-transform duration-300"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                      <p className="text-sm font-semibold text-gray-800 mt-1">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-24 p-8 mt-14 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-[48px] md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text">
              Experience
            </h2>

            {/* ✅ กล่อง Grid 2 คอลัมน์ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-left px-4">

              {/* ✅ Mobile Application */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Mobile Application
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col md:flex-row items-start gap-6 shadow-lg">
                  <img
                    src="/5.png"
                    alt="Mobile Application Preview"
                    className="w-56 rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  />
                  <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-lg text-gray-800 leading-relaxed">
                      แอปพลิเคชัน “NEXT STEP”<br />
                      เป็นแอปแจ้งเตือนกิจกรรม โดยออกแบบให้ผู้ใช้งานสามารถตั้งเวลาและรายละเอียดกิจกรรม พร้อมฟีเจอร์<br />
                      ✅ ระบบลงชื่อเข้าใช้งาน<br />
                      ✅ ระบบสมัครสมาชิก<br />
                      ✅ ระบบลืมรหัสผ่าน และเปลี่ยนรหัสผ่าน<br />
                      ✅ การสร้าง แก้ไข และจัดการกิจกรรม<br />
                      ✅ การดูประวัติกิจกรรมย้อนหลัง<br />
                      ✅ การตั้งค่าบัญชีผู้ใช้<br />
                      โดยมีเป้าหมายเพื่อช่วยให้ผู้ใช้บริหารเวลาได้อย่างมีประสิทธิภาพ สะดวกต่อการจัดการภารกิจในชีวิตประจำวัน
                      อีกทั้งได้ฝึกทักษะเขียนโค้ดจริงทั้ง Frontend และ Backend และได้ประสบการณ์ในการแก้ปัญหาและปรับแผนการทำงานภายใต้ความรู้ที่มี
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Editor & Graphic Design */}
              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Editor & Graphic Design
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center gap-6 shadow-lg">
                  <img
                    src="/12.png"
                    alt="Editor & Graphic Design Preview"
                    className="w-full max-w-xl rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  />
                  <div className="text-gray-800 text-lg leading-relaxed text-left">
                    <p>
                      ตัวอย่างผลงานด้านการตัดต่อวิดีโอและออกแบบกราฟิก มีประสบการณ์ในการผลิตสื่อภาพและวิดีโอที่หลากหลาย
                      ครอบคลุมทั้งโซเชียลมีเดีย อินโฟกราฟิก ไปจนถึงงานแอนิเมชันเบื้องต้น โดยเน้นการออกแบบที่เรียบง่าย ทันสมัย
                      และสื่อสารได้อย่างตรงใจกลุ่มเป้าหมาย ใช้เครื่องมือระดับมืออาชีพ ได้แก่<br />
                      ✅ Adobe Premiere Pro สำหรับตัดต่อวิดีโอ<br />
                      ✅ Adobe Photoshop สำหรับการออกแบบและตกแต่งภาพ<br />
                      ✅ Adobe Illustrator สำหรับสร้างกราฟิกเวกเตอร์และอินโฟกราฟิก<br />
                      ผลงานทั้งหมดมุ่งเน้นคุณภาพ ความชัดเจน และสามารถนำไปใช้จริงในเชิงธุรกิจหรือการสื่อสารออนไลน์อย่างมีประสิทธิภาพ
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Java Programmer */}
              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Java Programmer
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center gap-6 shadow-lg">
                  <img
                    src="/Screenshot 2024-07-22 011545.png"
                    alt="Java Programmer Preview"
                    className="w-full max-w-xl rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  />
                  <div className="text-gray-800 text-lg leading-relaxed text-left">
                    <p>
                      พัฒนาโปรเจกต์เกี่ยวกับการทำ Desktop Application โดยใช้ภาษา Java
                      ในการเขียนโปรแกรมระบบการจำลองการซื้อ-ขายเกม โดยได้รับแรงบันดาลใจจากแอป Steam
                      ได้รับหน้าที่ Design App ทั้ง Frontend และ Backend และฝึกการเขียนโปรแกรมแบบ OOP
                      ซึ่งช่วยพัฒนาทักษะการเขียนโปรแกรมและทำงานร่วมกับทีม
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Web Development */}
              <div data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Web Development
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center gap-6 shadow-lg">
                  <img
                    src="/Screenshot 2024-07-28 151743.png"
                    alt="Web Development Preview"
                    className="w-full max-w-xl rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  />
                  <div className="text-gray-800 text-lg leading-relaxed text-left">
                    <p>
                      พัฒนาเว็บไซต์โดยใช้ React.js, Vite, HTML, CSS, Tailwind และ JavaScript
                      ทั้งในส่วน frontend และ backend รวมถึงเชื่อมต่อฐานข้อมูล
                      มีประสบการณ์การ deploy เว็บไซต์จริง และใช้ GitHub ร่วมกับทีม
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Photography & Retouching */}
              <div data-aos="fade-up" data-aos-delay="600">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Photography & Retouching
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center gap-6 shadow-lg">
                  <img
                    src="/FB4CF4DF-B224-4593-A23F-97C055F0755B.jpg"
                    alt="Photography Preview"
                    className="w-64 rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  />
                  <div className="text-gray-800 text-lg leading-relaxed text-left">
                    <p>
                      ได้มีโอกาสทำงานจริงในงานถ่ายภาพแนว Portrait และ Product รวมถึงมีทักษะการรีทัชภาพ
                      ใช้กล้อง Mirrorless และโปรแกรม Adobe Lightroom/Photoshop
                      เพื่อปรับแสง สี และรายละเอียดให้สื่ออารมณ์ได้ตรงตามความต้องการ
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Python Programmer */}
              <div data-aos="fade-up" data-aos-delay="700">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Python Programmer
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center gap-6 shadow-lg">
                  <img
                    src="/11111.png"
                    alt="Python Programmer Preview"
                    className="w-74 rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  />
                  <div className="text-gray-800 text-lg leading-relaxed text-left">
                    <p>
                      พัฒนาโปรเจกต์ Desktop Application โดยใช้ภาษา Python
                      เกี่ยวกับการจำลองระบบซื้อตั๋วรถไฟฟ้า BTS และ MRT ได้รับหน้าที่ออกแบบ UX/UI และพัฒนา Frontend + Backend
                      ฝึกใช้ OOP และพัฒนาแนวคิดการทำงานเป็นทีมอย่างมีระบบ
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
            <h2 className="text-[48px] md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text">Contact</h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-24 justify-items-center">
              {/* Email */}
              <div className="flex flex-col items-center"
                data-aos="fade-right"
                data-aos-delay="200">
                <img
                  src="/mail.png"
                  alt="Email Icon"
                  className="w-14 h-14 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
                <a
                  href="mailto:weerapatak47@gmail.com"
                  className="text-blue-600 underline text-lg"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  weerapatak47@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200">
                <img
                  src="/phone.png"
                  alt="Phone Icon"
                  className="w-14 h-14 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
                <p className="text-lg"
                  data-aos="fade-up"
                  data-aos-delay="200">
                  086-466-3853</p>
              </div>

              {/* GitHub */}
              <div className="flex flex-col items-center"
                data-aos="fade-left"
                data-aos-delay="200">
                <img
                  src="/github-sign.png"
                  alt="GitHub Icon"
                  className="w-14 h-14 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
                <a
                  href="https://github.com/weerapatak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-lg"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  https://github.com/weerapatak
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ✅ Footer */}
      <footer className="bg-[#00255d] text-white py-12 relative">
        <div className="w-full px-4 text-center space-y-6">
          <div className="flex justify-center">
            <img src="/portfolioo.png" alt="Logo" className="w-20 h-20" />
          </div>

          <nav className="flex justify-center flex-wrap gap-6 font-semibold text-white text-sm md:text-base">
            {navItems.map((item) => (
              item.href === "#home" ? (
                <a
                  key={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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

          <p className="text-md text-blue-400 mt-auto">
            © 2025 Website developed by {" "}
            <span className="text-blue-300 font-medium">Weerapat Arkomsansern</span>
          </p>
        </div>

        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-8 w-10 h-10 rounded-full ring-2 ring-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in-out transform ${showScrollTop
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