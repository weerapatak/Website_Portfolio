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
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PHOTOGRAPHER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBSITE DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> VIDEO EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> FULL-STACK DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> UX/UI DESIGN
              </span>

              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PHOTOGRAPHER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBSITE DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> VIDEO EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> FULL-STACK DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> UX/UI DESIGN
              </span>

              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PHOTOGRAPHER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBSITE DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> VIDEO EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> FULL-STACK DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> UX/UI DESIGN
              </span>

              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PHOTOGRAPHER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBSITE DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> VIDEO EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> FULL-STACK DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> UX/UI DESIGN
              </span>

              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> GRAPHIC DESIGN
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> PHOTOGRAPHER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> MOTION GRAPHIC
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> WEBSITE DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> VIDEO EDITOR
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> FULL-STACK DEVELOPER
              </span>
              <span className="inline-block px-8">
                <span className="inline-block animate-spin-reverse-slow mr-10">✱</span> UX/UI DESIGN
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
                    ตลอดช่วงที่ผ่านมา ผมได้ฝึกฝนเรียนรู้ไม่เว้นแต่ละวันรวมถึงไม่เคยย่อท้อ ตั้งแต่การออกแบบ เขียนโค้ด ช่างถ่ายรูป ตัดต่อวิดีโอ ไปจนถึงการเกรดสีภาพ
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
            <h2
              className="text-[48px] md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Skills
            </h2>

            {/* ✅ 2 row × 2 col */}
            <div className="grid md:grid-cols-2 gap-12 mt-12 text-left">

              {/* ✅ Soft Skills (ซ้ายบน) */}
              <div>
                <h3
                  className="text-2xl font-bold text-blue-500 transition-colors duration-300"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Soft Skill
                </h3>
                <ul
                  className="mt-6 space-y-3 list-none text-lg"
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
              <div className="mx-20">
                <h3
                  className="text-2xl font-bold text-blue-500 transition-colors duration-300"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  Coding Skill
                </h3>
                <div
                  className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6"
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
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                      <p className="text-sm font-semibold text-gray-800 mt-1">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ Tools (แถวล่าง เต็มความกว้าง) */}
              <div className="md:col-span-2 w-full">
                <h3
                  className="text-2xl font-bold text-blue-500 transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Tool
                </h3>

                {/* ใช้ auto-fit ให้กินพื้นที่เต็มบรรทัด */}
                <div
                  className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4"
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
                    { name: "React", icon: "/science.png" },       // แก้ path ให้ถูก
                    { name: ".Net Maui", icon: "/microsoft-dot-net-icon.png" },
                    { name: "Github", icon: "/github-sign.png" },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="w-full bg-blue-100 rounded-xl p-4 flex flex-col items-center text-center shadow hover:scale-105 transition-transform duration-300"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                      <p className="text-sm font-semibold text-gray-800 mt-1">
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
            className="scroll-mt-24 p-8 mt-14 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-[48px] md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text">
              Experience
            </h2>

            {/* ✅ กล่อง Grid 2 คอลัมน์ */}
            <div className="grid grid-cols-1 gap-12 mt-12 text-left px-4">

              {/* ✅ Mobile Application */}
              <div data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Mobile Application Developer - Managing daily mission notification
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col md:flex-row items-start gap-14 shadow-lg">
                  <img
                    src="/1.png"
                    alt="Mobile Application Preview"
                    className="w-56 rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="200"/>
                  <img
                    src="/5.png"
                    alt="Mobile Application Preview"
                    className="w-56 rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="200"/>
                  <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-5xl font-bold text-gray-900 mb-4">
                      Next Step Application
                    </h3>
                    <p className="text-xl text-gray-800 leading-loose mt-6">
                      เป็นโปรเจกต์รายวิชาที่มุ่งเน้นการสร้างแอปพลิเคชันบนมือถือ เพื่อให้ผู้ใช้สามารถบริหารเวลาได้อย่างมีประสิทธิภาพ
                      สะดวกต่อการจัดการภารกิจในชีวิตประจำวัน<br />
                      • ฝึกพัฒนาแอปพลิเคชันด้วยโปรแกรม Visual Studio 2022<br />
                      • ฝึกทักษะการเขียน Logic ด้วยภาษา C#<br />
                      • ฝึกสร้างสรรค์การออกแบบที่สวยงามใช้งานง่าย(UI) ด้วย Figma และ Adobe Photoshop อีกทั้งยังมอบประสบการณ์การใช้งานให้ผู้ใช้ได้ประทับใจ(UX)<br />
                      • ฝึกทักษะการทำงานร่วมกับผู้อื่น เพื่อสร้างแอปพลิเคชันได้อย่างมีประสิทธิภาพและใช้งานได้อย่างราบรื่น
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Java Developer */}
              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Java Developer - A Desktop Application for a Game Trading Simulation System
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center gap-6 shadow-lg">
                  <img
                    src="/Screenshot 2024-07-22 011545.png"
                    alt="Java Developer Preview"
                    className="w-full max-w-xl rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  />
                  <div className="text-gray-800 text-lg leading-relaxed text-left w-full">
                    <h3 className="text-5xl font-bold text-gray-900 mb-4 leading-snug text-center lg:text-left">
                      Game Trading Simulation System
                    </h3>
                    <p className="text-xl text-gray-800 leading-loose">  
                      เป็นโปรเจกต์รายวิชาที่มุ่งเน้นการสร้าง Desktop Application จากภาษา Java
                      เพื่อเพิ่มทักษะความชำนาญในการเขียนโปรแกรมแบบ OOP (Object-Oriented Programming)<br />
                      • ฝึกทักษะการออกแบบ UX/UI โปรแกรมให้ใช้งานง่ายด้วย Figma และ Adobe Photoshop<br />
                      • ฝึกการเรียนรู้การใช้ Database เพื่อเก็บข้อมูลต่างๆ ในฐานข้อมูล<br />
                      • ฝึกทักษะการทำงานร่วมกับคนในกลุ่ม เพื่อสร้างโปรแกรมจำลองให้มีประสิทธิภาพมากที่สุด
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Website Developer */}
              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Website Developer - Flood Alert Website
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center gap-8 shadow-lg">
                  <img
                    src="/Screenshot 2024-07-28 151743.png"
                    alt="Website Developer Preview"
                    className="w-full max-w-xl rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  />
                  <div className="text-gray-800 text-lg leading-relaxed text-left w-full">
                    <h3 className="text-5xl font-bold text-gray-900 mb-4 leading-snug text-center lg:text-left">
                      Flood Alert Website
                    </h3>
                    <p className="text-xl text-gray-800 leading-loose">
                      เป็นโปรเจกต์รายวิชาที่มุ่งเน้นการสร้างเว็บไซต์ที่สามารถใช้งานได้จริง เพื่อฝึกทักษะการเขียนโค้ดให้ดียิ่งขึ้น<br />
                      • พัฒนาเว็บไซต์ด้วย React.js ร่วมกับ Vite, Tailwind CSS เพื่อช่วยให้การสร้างเว็บไซต์สะดวกและรวดเร็วขึ้น<br />
                      • ฝึกทักษะสาย Full-Stack Developer และ Database<br />
                      • ได้เรียนรู้ภาษา html, css, Javascript เพิ่มมากขึ้น<br />
                      • ได้ฝึกใช้งานเครื่องมือเสริมจาก React Library และ Bootstrap framework เพื่อช่วยให้หน้าตาของเว็บไซต์มีโครงสร้างที่ดีและสวยงาม<br />
                      • ได้เรียนรู้การ Deploy เว็บไซต์ให้ใช้งานได้จริงร่วมกับ Github
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Python Programmer */}
              <div data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Python Developer - Desktop Application with Tkinter python
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center gap-8 shadow-lg">
                  {/* 🔹 รูปภาพเรียงซ้าย-ขวา */}
                  <div className="flex flex-row gap-6 justify-center">
                    <img
                      src="/11111.png"
                      alt="Python Developer Preview"
                      className="w-2/5 max-w-md rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    />
                    <img
                      src="/Screenshot 2025-09-10 193058.png"
                      alt="Python Developer Preview"
                      className="w-2/5 max-w-md rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    />
                  </div>
                  <div className="text-gray-800 text-lg leading-relaxed text-left w-full">
                    <h3 className="text-5xl font-bold text-gray-900 mb-4 leading-snug text-center lg:text-left">
                      BTS & MRT Ticketing Simulation System
                    </h3>
                    <p className="text-xl text-gray-800 leading-loose">
                      เป็นโปรเจกต์รายวิชาที่มุ่งเน้นการสร้างระบบจำลองด้วยภาษา Python ร่วมกับเครื่องเสริมอย่าง Tkinter Library
                      เพื่อสร้างโปรแกรมเดสก์ท็อป<br /> ที่ผู้ใช้สามารถตอบโต้ได้<br />
                      • ฝึกทักษะสาย Full-Stack Developer และ Database(DB Browser SQL)<br />
                      • ฝึกการออกแบบ UX/UI แอปพลิเคชันด้วย Figma และ Adobe Photoshop<br />
                      • ได้ทำโปรเจกต์ร่วมกับเพื่อน ซึ่งพวกเราเข้ากันได้ดีมาก
                    </p>
                  </div>
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
              Work Experience</h2>
            
            {/* ✅ กล่อง Grid 2 คอลัมน์ */}
            <div className="grid grid-cols-1 gap-12 mt-12 text-left px-4">
  
              {/* ✅ Editor & Graphic Design */}
              <div data-aos="fade-up" data-aos-delay="600">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Editor & Graphic Design - Aiyara Gems Co., Ltd.
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col items-center gap-3 shadow-lg">
                  <div className="flex flex-row gap-4 justify-center">
                    <img
                      src="/12.png"
                      alt="Editor & Graphic Design Preview"
                      className="w-3/4 max-w-lg rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    />
                    <img
                      src="/Screenshot 2025-09-11 173650.png"
                      alt="Editor & Graphic Design Preview"
                      className="w-3/4 max-w-lg rounded-xl shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    />
                  </div>
                  <div className="text-gray-800 text-lg leading-relaxed text-left mt-4">
                    <p className="text-xl text-gray-800 leading-loose">
                      ผมมีประสบการณ์การทำงานจริงจากบริษัท Aiyara Gems ซึ่งเป็นบริษัทสายอินฟลูเอนเซอร์ขายเพชรและเครื่องประดับต่างๆ
                      ผมเริ่มเข้าทำงานที่นี่ตั้งแต่เดือนมิถุนายนปี 2565 มาจนถึงปัจจุบัน และได้สะสมประสบการณ์ทักษะที่จำเป็น ไม่ว่าจะเป็น<br />
                      • การนำเสนอผลงานและพูดคุยกับ CEO บริษัทในเรื่องของการทำงานข้ามสายงานไม่ตรงกับสาขาที่เรียน<br />
                      • ได้ทำงานร่วมกันเป็นทีมในแต่ละโปรเจกต์ของบริษัท<br />
                      • ได้ออกแบบและดีไซน์จริง ได้ลงมือปฎิบัติจริงนอกเหนือจากสิ่งที่เรียนในห้องเรียน<br />
                      • ได้ฝึกทักษะจินตนาการสร้างสรรค์ลงในผลงาน และถ่ายทอดผลงานออกสื่อโซเชียลมีเดียจริง
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Photography & Retouching */}
              <div data-aos="fade-up" data-aos-delay="700">
                <h3 className="text-2xl font-bold text-blue-500 mb-8">
                  Photographer & Graphic Design - RC Store & KP Store Mobile Phone Repair Services
                </h3>
                <div className="bg-blue-100 p-6 rounded-xl flex flex-col lg:flex-row items-center gap-8 shadow-lg">
                  <img
                    src="/FB4CF4DF-B224-4593-A23F-97C055F0755B.jpg"
                    alt="Photographer Preview"
                    className="w-64 rounded-xl shadow-lg"
                    data-aos="zoom-in"
                    data-aos-delay="700"
                  />
                  <div className="text-gray-800 text-lg leading-relaxed text-left">
                    <p className="text-xl text-gray-800 leading-loose">
                      ผมได้มีประสบการณ์การรับงานฟรีแลนซ์ ซึ่งงานนี้เป็นงานที่ท้าทายตัวผมเป็นอย่างมาก ผมได้เรียนรู้การถ่ายภาพแนว Portrait เรียนรู้การใช้<br />กล้องดิจิทัล การจัดวางไฟและองค์ประกอบต่างๆ
                      เพื่อปรับแสง สี รายละเอียดให้ดีที่สุด และตรงตามความต้องการของผู้ใช้<br />
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
            <h2 className="text-[48px] md:text-[52px] font-bold bg-blue-500 text-transparent bg-clip-text">
              Contacts
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-24 justify-items-center">

              {/* Email */}
              <div className="flex flex-col items-center" data-aos="fade-right" data-aos-delay="200">
                <img
                  src="/mail.png"
                  alt="Email Icon"
                  className="w-14 h-14 mb-4"
                />
                <a
                  href="mailto:weerapatak47@gmail.com"
                  className="text-blue-600 underline text-lg"
                >
                  weerapatak47@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="/phone.png"
                  alt="Phone Icon"
                  className="w-14 h-14 mb-4"
                />
                <p className="text-lg">086-466-3853</p>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="/linkedinn.png"
                  alt="LinkedIn Icon"
                  className="w-14 h-14 mb-4"
                />
                <a
                  href="https://www.linkedin.com/in/weerapat-arkomsansern-836446380/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-lg"
                >
                  linkedin.com/in/weerapatak
                </a>
              </div>

              {/* GitHub */}
              <div className="flex flex-col items-center" data-aos="fade-left" data-aos-delay="200">
                <img
                  src="/github-sign.png"
                  alt="GitHub Icon"
                  className="w-14 h-14 mb-4"
                />
                <a
                  href="https://github.com/weerapatak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-lg"
                >
                  github.com/weerapatak
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