import { useRef, Suspense} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import { Canvas, AcesFilmicToneMapping } from "@react-three/fiber";
import { OrbitControls, Stage, PerspectiveCamera, Preload } from '@react-three/drei';
import Navbar from '../components/Navbar'
import LoadingSpinner from '../components/LoadingSpinner';
import CardView from '../components/Cardview';
import HeadingText1 from '../components/HeadingText1';
require('default-passive-events');

const DynamicWiFiInfoGLTF = dynamic(() => import('../components/threejs/WiFi_Info_Logo'), { suspense: true });

const Light = () => {
  const ref = useRef()
  return (
    <>
      <directionalLight
        ref={ref}
        intensity={0.5}
        position={[10, 15, 20]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-top={10}
        shadow-bias={-0.0001}
        shadow-darkness={0.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
    </>
  )
}

export default function Home() {
  const ref = useRef();
  return (
    <div className='m-0 p-0 bg-gray-900 opacity-90'>
      <Head>
        <title>TMP Apps | Home</title>
        <meta name="description" content="A website featuring all of my projects and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar shouldScrollToTop={true} icon="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
        TrueMLGPro
      </Navbar>

      {/* I just needed to have a padding-bottom instead of a margin-bottom AAAAAAAAA */}
      <main className="pb-8 pt-36 -mt-24 bg-gray-900 lg:overflow-hidden homepage-gradient">
        <div className="mx-auto max-w-7xl lg:px-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:py-24">
              <div>
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block pb-3 sm:pb-5 bg-clip-text text-transparent blueGradientUnderlineText">my website!</span>
                </h1>
                <p className="text-base text-gray-200 sm:text-xl lg:text-lg xl:text-xl">A place where I showcase my projects and makings. I don&apos;t know what to write here but I just need a long text to test out the layout so here we go I guess lol. This layout won&apos;t get itself to work ffs</p>
              </div>
            </div>
            <div className="flex mt-12 mb-16 lg:py-12 lg:m-0 lg:justify-end">
              <div className="flex sm:w-64 sm:h-64 lg:w-96 lg:h-96 lg:max-w-lg sm:mx-auto lg:mx-0 sm:max-w-2xl">
                <Suspense className="w-full h-full items-center align-middle" fallback={<LoadingSpinner />}> { /* FIXME: ALIGN THE SUSPENSE TO CENTER */ }
                  <Canvas onCreated={state => {state.gl.toneMapping = AcesFilmicToneMapping; state.gl.toneMappingExposure = 2.3}} resize={{debounce: 0}} linear shadows frameloop="demand" dpr={[1, 2]} className="rounded-3xl">
                    <Preload all />
                    <Light />
                    <Stage controls={ref} intensity={0.1} shadows={false}>
                      <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={30} zoom={0.8} />
                      <DynamicWiFiInfoGLTF />
                    </Stage>
                    <OrbitControls ref={ref} autoRotate autoRotateSpeed={Math.PI / 2} enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
                  </Canvas>
                </Suspense>
              </div>
            </div>
          </div>
          <div className="md:mx-8 lg:mx-0">
            <HeadingText1 customStyle="sm:text-center sm:mx-8 lg:text-left md:mx-0">
              My Projects
            </HeadingText1>
            <div className="sm:flex sm:flex-col md:flex-none sm:space-y-8 md:space-y-0 sm:mx-8 md:mx-0 sm:mt-8 md:grid md:grid-cols-2 md:gap-8">
              <CardView
                title="Wi-Fi Info"
                desc="A nice network toolset packed into an Android app!"
                link="https://github.com/TrueMLGPro/Wi-Fi_Info"
                language="Java"
                langColor="bg-yellow-600"
              />
              <CardView
                title="MultiDownloader"
                desc="Easily download files using curl, wget and httrack"
                link="https://github.com/TrueMLGPro/MultiDownloader"
                language="Python"
                langColor="bg-sky-600"
              />
              <CardView
                title="gif2webm (under development)"
                desc="Convert GIFs to WebM videos! Optionally, you can encode your final result with VP9 codec to preserve transparency (useful for Telegram Video Stickers)"
                language="Python"
                langColor="bg-sky-600"
              />
              <CardView
                title="Cat-of-The-Minute"
                desc="A website which displays a new cat picture or GIF every 60 seconds"
                link="https://github.com/TrueMLGPro/Cat-of-The-Minute"
                language="JavaScript"
                langColor="bg-yellow-300"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
