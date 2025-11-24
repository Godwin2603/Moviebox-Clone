import logo from "../assets/logo.png";
import img1 from "../assets/App/img1.png";
import img4 from "../assets/App/img4.png";
import img5 from "../assets/App/img5.png";
import img6 from "../assets/App/img6.png";
import img7 from "../assets/App/img7.png";
import img8 from "../assets/App/img8.png";
import img9 from "../assets/App/img9.png";

import "../css/Movieboxapp.css";
function Movieboxapp() {
  return (
    <div className="box">
      <div className="app-box">
        <div
          className="flex  items-center gap-4"
          style={{ padding: "1rem", fontFamily: "Roboto" }}
        >
          <img src={logo} alt="" />
          <h1 className="text-xl font-bold ">Moviebox Official</h1>
        </div>
        <div className="flex items-center  row justify-center gap-8">
          <img src={img1} className="phone" />
          <div className="flex flex-col  gap-4">
            <h1 className="text-4xl font-bold">Moviebox app download</h1>
            <p>
              Download MovieBox App to stream and download movies, TV series,
              and anime for FREE!
            </p>
            <div className="scanner">
              <div className="scan-line"></div>
            </div>
            <p>Scan Qrcode to download or</p>
            <button className="gradient inline-flex gap-4 items-center font-bold">
              <i className="fa fa-mobile-alt text-xl"></i>Download Moviebox
            </button>
          </div>
        </div>
      </div>
      <div className="section-container">
        <section className="flex flex-col gap-16">
          <h1 className="text-4xl text-center">
            Download and install the MovieBox app
          </h1>
          <div className="flex row justify-between row items-center">
            <div className="flex flex-col max-w-[900px] gap-2">
              <h1 className="text-4xl text-gray-600 font-extrabold">Step 1</h1>
              <p className="text-4xl">Download Moviebox APK</p>
              <p className="text-gray-300">
                On our MovieBox official website, click the Download Android APK
                button. You will see a message saying "Downloading file," which
                means the download has started. Note that If you are a PC user,
                you can scan the QR code on the page to download the MovieBox
                APK directly.
              </p>
            </div>
            <div>
              <img src={img4} className="h-[200px] w-[400px]" />
            </div>
          </div>
          <div className="flex row justify-between items-center gap-8">
            <img src={img5} className="h-[200px] w-[400px]" />
            <div className="flex flex-col">
              <h1 className="text-4xl text-gray-600 font-extrabold">Step 2</h1>
              <p className="text-4xl">Install the moviebox App</p>
              <p className="text-gray-300 ">
                After the download is complete, open the Downloads folder in
                your browser. You will see an APK file named MovieBox. Tap on
                this file to start the installation. If you see a pop-up message
                asking if you want to install unknown apps, tap OK to go to the
                settings and allow installation.
              </p>
            </div>
          </div>
          <div className="flex row justify-between items-center gap-8">
            <div className="flex flex-col">
              <h1 className="text-4xl text-gray-600 font-extrabold">Step 3</h1>
              <p className="text-4xl">Watch Movies and shows</p>
              <p className="text-gray-300">
                Once the MovieBox app is installed, you can watch thousands of
                movies and TV shows on your phone, including the latest movies,
                Korean dramas, anime, and more. With the MovieBox app, you can
                also choose to download them to your phone, so you can watch
                offline without using your mobile data.
              </p>
            </div>
            <img src={img6} className="h-[200px] w-[400px]" />
          </div>
        </section>
      </div>

      <div>
        <div className="flex flex-col justify-around items-center faq">
          <h1 className="text-4xl text-center h1">
            MovieBox App: Watch Free Movies and TV Shows
          </h1>
          <div className="flex row items-center justify-around gap-8">
            <img src={img7} className="w-[800px] h-[600px]" />
            <div className="flex flex-col">
              <h1 className="text-4xl h1 font-bold">
                A Wide Selection of TV Shows and Movies
              </h1>
              <p className="text-gray-300">
                With MovieBox, you can watch thousands of movies and TV shows in
                many genres and many languages. You can watch with subtitles in
                different languages, and even use two languages at the same
                time. With MovieBox, your phone becomes your own mobile cinema.
              </p>
            </div>
          </div>
        </div>
        <div className="flex row justify-around items-center gap-8 faq">
          <div className="flex flex-col  justify-center ">
            <h1 className="text-4xl h1 font-bold">
              Download Movies and TV Shows Offline
            </h1>
            <p className="text-gray-300">
              You don't have to worry about buffering or losing internet
              connection, because MovieBox allows you to download movies and TV
              shows for free and watch them offline. You can download without
              limits and choose 360p, 480p, or 720p when downloading.
            </p>
          </div>
          <img src={img8} className="w-[800px] h-[600px]" />
        </div>
        <div className="flex row justify-around gap-8 items-center faq">
          <img src={img9} className="w-[800px] h-[600px]" />
          <div className="flex flex-col  justify-center ">
            <h1 className="text-4xl h1 font-bold">100% free to use</h1>
            <p className="text-gray-300">
              MovieBox app is completely free to use. You can watch movies, TV
              shows, anime, live sports, and funny videos. You can also download
              videos to your device. Everything is free. Our goal is to help you
              enjoy movies and shows anytime and anywhere.
            </p>
          </div>
        </div>
      </div>
      <div className="section-container">
        <section className="">
          <h1 className="text-4xl text-center font-bold">Moviebox FAQs</h1>
          <div className="border-b border-gray-800 faqs">
            <details>
              <summary className = "font-bold text-xl">
                Do I need to download the MovieBox app? What is the benefit?
              </summary>
              <p className="text-gray-300 text-lg">
                You can watch free movies and TV shows on the MovieBox website
                without downloading the app. However, since it is streaming
                online, the video speed may be slow if your internet connection
                is slow. The MovieBox app lets you download movies and TV shows,
                so you can watch them offline without internet. It also gives
                you extra features, such as more movies and TV shows, a
                community, and friend tasks to earn points. Most importantly,
                the MovieBox website may close anytime, so we suggest you
                download the MovieBox app to make sure you can always access
                MovieBox.
              </p>
            </details>
          </div>
          <div className="faqs border-b border-gray-800">
            <details>
              <summary className = "font-bold text-xl">
                Is the MovieBox app only for Android? Is there a MovieBox iOS
                APK?
              </summary>
              <p className="text-gray-300 text-lg">
                Right now, the MovieBox APK can only be installed on Android
                phones. The MovieBox iOS APK is still in development. If you are
                an iPhone user, you can check the MovieBox website for news and
                updates.
              </p>
            </details>
          </div>
          <div className="faqs border-b border-gray-800">
            <details>
              <summary className = "font-bold text-xl">
                Can I install the MovieBox app from the Play Store?
              </summary>
              <p className="text-gray-300 text-lg">
                The MovieBox app is not in the Play Store. Any app called
                MovieBox in the Play Store is fake. We are not responsible if
                you download, install, or use a fake MovieBox app from the Play
                Store.
              </p>
            </details>
          </div>
          <div className="faqs border-b border-gray-800">
            <details>
              <summary className = "font-bold text-xl ">Can I download MovieBox for PC?</summary>
              <p className="text-gray-300">
                 If you are a PC user, you can watch movies
                and TV shows by visiting the MovieBox website. There is no
                special MovieBox app for PC. However, for easy access, we
                suggest you save the MovieBox website as a bookmark or make a
                shortcut on your desktop, so you just click the MovieBox icon
                when you want to watch.
              </p>
            </details>
          </div>
          <div className="faqs border-b border-gray-800">
            <details>
              <summary className = "font-bold text-xl">
                Where can I download the MovieBox APK old version?
              </summary>
              <p className="text-gray-300 text-lg">
                The official MovieBox website does not provide the old version
                anymore, and we only give the latest MovieBox APK, because the
                latest version has the newest movies and TV shows, works better,
                and has fewer problems.
              </p>
            </details>
          </div>
          <div className="faqs border-b border-gray-900">
            <details>
              <summary className = "font-bold text-xl">Is the MovieBox app free?</summary>
              <p className="text-gray-300 text-lg">
                Yes, the MovieBox app is completely free to use. However, we
                show some ads in the MovieBox app to help keep it running. We
                hope you understand and support us.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Movieboxapp;
