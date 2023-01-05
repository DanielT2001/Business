import React, { useEffect } from 'react';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import { BsSpeedometer2 } from 'react-icons/bs';
import { BsCloud } from 'react-icons/bs';
import { BsPhone } from 'react-icons/bs';
import { BsStopwatch } from 'react-icons/bs';
import { BsCheck } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsArrowUp } from 'react-icons/bs';
import Hero from './components/Hero';
gsap.registerPlugin(ScrollTrigger);


function App() {
  useEffect(() => {
    // Scroll to top arrow
    gsap.fromTo('.arrow', { y: 200, opacity: 0, rotate: 1080 }, {
      y: 0, opacity: 1, rotate: 0, duration: 1, ease: "elastic.out(1, 0.75)",
      scrollTrigger: {
        trigger: '.starter',
        start: 'top 90%',
        end: 'top 80%',
        scrub: 5,
        toggleActions: 'play none none reset',
      }
    })
    // Loading Effect
    const tl = gsap.timeline()
    tl.fromTo('.whole', { opacity: 0 }, { opacity: 1, duration: 1 })
      // Header + Menu Animation
      .fromTo('.header', { opacity: 0, y: -400 }, { opacity: 1, y: 0, duration: 1, ease: "power3.easeOut" })
    gsap.fromTo('.face', { opacity: 0, scale: .2 }, { opacity: 1, scale: 1, duration: 4, ease: 'elastic.out(1, 1)' }, '<90%')
    gsap.fromTo('.exp', { x: -400, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '<20%')
    gsap.fromTo('.exp2', { x: -400, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '<40%')
    gsap.fromTo('.exp3', { x: -400, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '<40%')
    gsap.fromTo('.exp4', { x: -400, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '<40%')
    gsap.fromTo('.exp5', { x: -400, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '<40%')
    // Sextion - 2
    gsap.fromTo('.bundle', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-start1',
        start: 'top 60%',
        // markers: true
      }
    }, '<40%')
    gsap.fromTo('.bundle2', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.bundle',
        start: 'top 60%',
        // markers: true
      }
    }, '<40%')
    gsap.fromTo('.bundle3', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.bundle2',
        start: 'top 60%',
        // markers: true
      }
    }, '<40%')
    gsap.fromTo('.bundle4', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.bundle3',
        start: 'top 60%',
        // markers: true
      }
    }, '<40%')
    gsap.fromTo('.bundle5', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.bundle4',
        start: 'top 60%',
        // markers: true
      }
    })
    gsap.fromTo('.bundle6', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.bundle5',
        start: 'top 60%',
        // markers: true
      }
    }, '<40%')
    gsap.fromTo('.card', { x: 600, opacity: 0, scale: 0 }, {
      x: 0, opacity: 1, scale: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.bundle',
        start: 'top 40%',
        // markers: true
      }
    }, '<50%')
    gsap.fromTo('.card1', { x: 600, opacity: 0, scale: 0 }, {
      x: 0, opacity: 1, scale: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.card',
        start: 'top 40%',
        // markers: true
      }
    }, '50%')
    gsap.fromTo('.card2', { x: 600, opacity: 0, scale: 0 }, {
      x: 0, opacity: 1, scale: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.card1',
        start: 'top 20%',
        // markers: true
      }
    }, '50%')
    gsap.fromTo('.card3', { x: 600, opacity: 0, scale: 0 }, {
      x: 0, opacity: 1, scale: 1, duration: 1.5,
      scrollTrigger: {
        trigger: '.card2',
        start: 'top 60%',
        // markers: true
      }
    }, '<50%')
    // Section - 3
    gsap.fromTo('.arch', { x: -700, opacity: 0, rotate: -45 }, {
      x: 0, opacity: 1, rotate: 0, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.anim-start2',
        start: 'top 20%',
      }
    })
    gsap.fromTo('.woman', { x: 100, opacity: 0, rotate: 45 }, {
      x: 0, opacity: 1, rotate: 0, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.woman',
        start: 'top 40%',
      }
    })
    gsap.fromTo('.woman', { x: 0 }, {
      x: 40, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.arch4',
        start: 'top 60%',
        scrub: 4,
        // markers: true
      }
    })
    gsap.fromTo('.arch2', { x: 700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.anim-start2',
        start: 'top 20%',
      }
    })
    gsap.fromTo('.arch3', { x: 700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.arch2',
        start: 'top 40%',
      }
    }, '<50%')
    gsap.fromTo('.arch4', { x: 700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.arch3',
        start: 'top 50%',
      }
    })
    gsap.fromTo('.arch5', { x: 700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.arch4',
        start: 'top 50%',
      }
    })
    // Section - 4
    gsap.fromTo('.recent', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.anim-start3',
        start: 'top 40%',
      }
    })
    gsap.fromTo('.recent2', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.recent',
        start: 'top 40%',
      }
    }, '<50%')
    gsap.fromTo('.recent3', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.recent2',
        start: 'top 40%',
      }
    })
    gsap.fromTo('.recent4', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.recent3',
        start: 'top 40%',
      }
    })
    gsap.fromTo('.recent5', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.recent4',
        start: 'top 40%',
      }
    })
    gsap.fromTo('.recent6', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.recent5',
        start: 'top 40%',
      }
    })
    gsap.fromTo('.recent7', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.recent4',
        start: 'top 40%',
      }
    })
    // // // Frames
    gsap.fromTo('.frame1', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.recent4',
        start: 'top 15%',
      }
    })
    gsap.fromTo('.frame4', { x: 700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.recent4',
        start: 'top 15%',
      }
    }, '<100%')
    gsap.fromTo(['.frame2, .frame3'], { y: 700, opacity: 0 }, {
      y: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.recent4',
        start: 'top 15%',
      }
    }, '<100%')
    gsap.fromTo(['.frame7, .frame6'], { y: 700, opacity: 0 }, {
      y: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.frame1',
        start: 'top 25%',
      }
    }, '<100%')
    gsap.fromTo('.frame5', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.frame1',
        start: 'top 15%',
      }
    })
    gsap.fromTo('.frame8', { x: 700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.frame1',
        start: 'top 15%',
      }
    }, '<100%')
    gsap.fromTo('.frame9', { y: 700, opacity: 0 }, {
      y: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.frame5',
        start: 'top 15%',
      }
    })
    // Section - 5
    gsap.set('.users', { transformOrigin: 'top left' })
    gsap.fromTo('.users', { x: -700, opacity: 0, rotate: 90, scale: .8 }, {
      x: 0, opacity: 1, rotate: 0, scale: 1, duration: 2, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.anim-start4',
        start: 'top 0%',
        // markers: true
      }
    })
    gsap.set('.users2', { transformOrigin: 'top right' })
    gsap.fromTo('.users2', { x: 700, opacity: 0, rotate: -90, scale: .8 }, {
      x: 0, opacity: 1, rotate: 0, scale: 1, duration: 2, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.anim-start4',
        start: 'top 0%',
        // markers: true
      }, delay: 1
    })
    gsap.fromTo('.users', { x: 0 }, {
      x: 20, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.users',
        start: 'top 20%',
        scrub: 4,
        // markers: true
      }
    })
    gsap.fromTo('.users2', { x: 0 }, {
      x: -20, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.users',
        start: 'top 20%',
        scrub: 4,
        // markers: true
      }
    })
    // Section - 6
    gsap.fromTo('.lcs', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.anim-start5',
        start: 'top 30%',
      }
    })
    gsap.fromTo('.lcs2', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.lcs',
        start: 'top 40%',
      }
    }, '<50%')
    gsap.fromTo('.lcs3', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1, 1)',
      scrollTrigger: {
        trigger: '.lcs2',
        start: 'top 40%',
      }
    }, '<50%')
    gsap.fromTo('.price', { x: 300, y: 60, opacity: 0 }, {
      x: 0, y: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.anim-start5',
        start: 'top 20%'
      }
    })
    gsap.fromTo('.price2', { y: -400, opacity: 0 }, {
      y: 0, opacity: 1, duration: 2, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.anim-start5',
        start: 'top 35%'
      }
    })
    gsap.fromTo('.price3', { x: -300, y: 60, opacity: 0 }, {
      x: 0, y: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.anim-start5',
        start: 'top 20%'
      }
    })
    gsap.fromTo('.blog', { x: -700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.Blog',
        start: 'top 70%'
      }
    })
    gsap.fromTo('.blog2', { x: 700, opacity: 0 }, {
      x: 0, opacity: 1, duration: 2, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.Blog',
        start: 'top 70%'
      }
    })
    gsap.fromTo('.blog3', { y: 700, opacity: 0 }, {
      y: 0, opacity: 1, duration: 2, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.blog2',
        start: 'top 45%'
      }
    })
    gsap.fromTo('.blog4', { y: 700, opacity: 0 }, {
      y: 0, opacity: 1, duration: 2, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.blog2',
        start: 'top 45%'
      }, delay: .5
    })
    gsap.fromTo('.blog5', { y: 700, opacity: 0 }, {
      y: 0, opacity: 1, duration: 2, ease: 'elastic.out(1,1)',
      scrollTrigger: {
        trigger: '.blog2',
        start: 'top 45%'
      }, delay: 1
    })
    gsap.fromTo('.anim-start6', { opacity: 0 }, {
      opacity: 1, duration: 2, scrollTrigger: {
        trigger: '.anim-start6',
        start: 'top 40%'
      }
    })
  })

  return (
    <div className="whole overflow-hidden selection:text-emerald-400 selection:bg-black relative">
      <a href='#top' className="arrow fixed z-30 bottom-12 md:bottom-20 right-12 md:right-24 p-0.15 inline-block bg-black group hover:bg-white hover:scale-110 hover:-translate-y-2 duration-500 rounded-full overflow-hidden">
        <div className="flex items-center justify-center p-4 bg-zinc-100 rounded-full group-hover:bg-black duration-500">
          <BsArrowUp className='group-hover:text-white duration-500' />
        </div>
      </a>
      {/* Hero */}
      <Hero />
      <section className="relative bg-zinc-50 pb-12 sm:pb-32 sm:h-screen md:h-full overflow-hidden" id='top'>
        <div className="relative md:flex pt-24 md:pt-40">
          <img src="Phlox/Picture frame.png" alt="" className="face absolute -right-24 top-8 md:hidden scale-105" />
          <div className="md:w-1/2 ml-4 lg:ml-16 mt-4">
            <div className="exp text-lg font-mono text-emerald-400">17 YEARS OF EXPERIENCE</div>
            <div className="exp2 text-4xl md:text-6xl md:font-semibold font-varela mt-8">
              <div> We are a</div> Web Design <span className='text-emerald-400'>Agency</span>
            </div>
            <img src="exp3 Phlox/divider.svg" alt="" className="mt-4" />
            <div className="exp4 text-sm text-zinc-400 font-semibold sm:font-normal md:text-zinc-600 mt-4 mb-8 w-3/4">Hello! Dlux Business here with you! We are known for great, interactive, and immersive designs. We are shortly the best. Want witnesses? Ask our moms. Seriously though, keep scrolling, see our works, and learn more about us.</div>
            <button className='exp5 font-light px-10 py-4 rounded-full text-sm shadow-2xl gradient-blue'>
              Read More
            </button>
          </div>
          <div className="face md:w-1/2 hidden md:block relative scale-125">
            <div className="absolute-right-14 my-6">
              <img src="Phlox/Picture frame.png" alt="" className="scale-150" />
            </div>
          </div>
        </div>
        <div className="exp5 lg:absolute mt-24 text-sm sm:text-base lg:mt-0 lg:bottom-12 xl:bottom-24 flex mx-4 lg:mx-16 space-x-6 sm:space-x-8">
          <a href="/" className="font-medium text-gray-700 hover:text-emerald-400 transform duration-500">Facebook</a>
          <a href="/" className="font-medium text-gray-700 hover:text-emerald-400 transform duration-500">Twitter</a>
          <a href="/" className="font-medium text-gray-700 hover:text-emerald-400 transform duration-500">Telegram</a>
          <a href="/" className="font-medium text-gray-700 hover:text-emerald-400 transform duration-500">Instagram</a>
        </div>
      </section>

      {/* Section - 2 */}

      <section className='anim-start1 mt-24 lg:mt-48 lg:h-full'>
        <div className="lg:flex pb-12">
          <div className="lg:w-2/5 ml-3">
            <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl0 font-varela tracking-tight leading-snug">
              <div className='bundle'>We Are Here To</div>
              <div className='bundle2'>Make Your <span className='text-emerald-400'>Website</span></div>
              <div className='bundle3'>Look More <span className='text-emerald-400'>Elegant</span></div>
              <div className='bundle4'>And Stylish!</div>
            </div>
            <img src="Phlox/divider.svg" alt="" className="bundle5 mt-10 scale-90" />
            <button className='bundle6 starter my-24 text-sm font-light px-10 py-4  rounded-full text-white gradient-button hover:shadow-xl transform duration-500'>
              VIEW ALL
            </button>
          </div>
          {/* <div id="DemoGradient"></div> */}
          <div className="lg:w-3/5 grid md:grid-cols-2 px-2 md:px-8 pb-12">
            <div className="hover:-translate-y-4 transform duration-500">
              <div className='card rounded-xl shadow-2xl px-8 py-16 gradient-card md:mr-4 mb-4 md:mb-8 group text-gray-800 hover:text-white duration-500'>
                {/* <img src="speedometer-outline.svg" alt="" /> */}
                <BsSpeedometer2 className='w-24 h-24 duration-500 text-emerald-400 group-hover:text-white' />
                <div className="text-3xl font-semibold font-varela text-gray-800 group-hover:text-white transform duration-500 mt-4 mb-6">Speed Optimization</div>
                <div className='text-gray-800 group-hover:text-white transform duration-500'>
                  We guarantee the highest loading, interaction, and execution speeds on wide range platforms and devices.
                </div>
              </div>
            </div>
            <div className="hover:-translate-y-4 transform duration-500">
              <div className='card1 rounded-xl shadow-2xl px-8 py-16 gradient-card md:mr-4 mb-4 md:mb-8 group text-gray-800 hover:text-white duration-500'>
                {/* <img src="speedometer-outline.svg" alt="" /> */}
                <BsCloud className='w-24 h-24 duration-500 text-emerald-400 group-hover:text-white' />
                <div className="text-3xl font-semibold font-varela text-gray-800 group-hover:text-white transform duration-500 mt-4 mb-6">Cloud Solution
                </div>
                <div className='text-gray-800 group-hover:text-white transform duration-500'>
                  Everything we do is backed by the most reliable and resilient cloud servers running on the latest technologies available.
                </div>
              </div>
            </div>
            <div className="hover:-translate-y-4 transform duration-500">
              <div className='card2 rounded-xl shadow-2xl px-8 py-16 gradient-card md:mr-4 mb-4 md:mb-8 group text-gray-800 hover:text-white duration-500'>
                {/* <img src="speedometer-outline.svg" alt="" /> */}
                <BsPhone className='w-24 h-24 duration-500 text-emerald-400 group-hover:text-white' />
                <div className="text-3xl font-semibold font-varela text-gray-800 group-hover:text-white transform duration-500 mt-4 mb-6">Website Design
                </div>
                <div className='text-gray-800 group-hover:text-white transform duration-500'>
                  Our designs follow the best proven principles to produce the most attractive and satisfactory interactions ever.
                </div>
              </div>
            </div>
            <div className="hover:-translate-y-4 transform duration-500">
              <div className='card3 rounded-xl shadow-2xl px-8 py-16 gradient-card md:mr-4 mb-4 md:mb-8 group text-gray-800 hover:text-white duration-500'>
                {/* <img src="speedometer-outline.svg" alt="" /> */}
                <BsStopwatch className='w-24 h-24 duration-500 text-emerald-400 group-hover:text-white' />
                <div className="text-3xl font-semibold font-varela text-gray-800 group-hover:text-white transform duration-500 mt-4 mb-6">Online Marketing</div>
                <div className='text-gray-800 group-hover:text-white transform duration-500'>
                  We also have our own online marketing platform for you to present your products right after production.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - 3 */}

      <section className='anim-start2 xl:flex bg-zinc-50 h-full my-14 lg:my-32 py-32'>
        <div className='xl:w-3/5 -translate-x-12 sm:-translate-x-0 relative h-full scale-75 sm:scale-100'>
          <div className="arch relative h-full w-600">
            <img src="Phlox/busy-architect-PYVKWM4-1024x872.jpg" alt="" className="rounded-2xl" />
            <div className="absolute top-0 left-0 bg-gradient-to-br from-lime-500 via-green-500 to-teal-500 w-full h-full rounded-2xl opacity-60">
            </div>
          </div>
          <div className="woman absolute top-36 md:top-16 left-12 md:left-28 rounded-2xl shadow-2xl w-600 h-full">
            <img src="Phlox/businesswoman-analysing-document-P8WSNMC-1024x1024.jpg" alt="" className="rounded-xl" />
          </div>
        </div>
        <div className='xl:w-2/5 ml-4 md:ml-12 mt-56 xl:mt-0'>
          <div className="arch2 text-4xl md:text-5xl font-varela tracking-tight leading-relaxed">
            <div>learn more</div>
            <div>about our</div>
            <div><span className='text-emerald-400'>missions</span></div>
          </div>
          <img src="Phlox/divider.svg" alt="" className="arch3 mt-10 scale-90" />
          <div className="arch4 text-sm text-zinc-600 my-8 w-3/4">Our main missions are delivering the best designs in terms of promoting their respective products and giving customers the smoothest and straight-forward purchase flow. We also strive to make designs that are aesthetically pleasing, and exemplary work of art.</div>
          <button className='arch5 text-sm font-light px-10 py-4 my-12 lg:my-24 rounded-full text-white gradient-button hover:shadow-xl transform duration-500'>
            READ MORE
          </button>
        </div>
      </section>

      {/* ESction - 4 */}

      <section className="anim-start3 flex flex-col pt-20 pb-12 lg:pt-28 lg:pb-28">
        <div className="md:flex w-full">
          <div className="ml-4 md:w-1/2">
            <img src="Phlox/divider.svg" alt="" className="recent mt-10 scale-90" />
            <div className="ml-0 md:ml-8 mt-4 md:mt-12 text-4xl md:text-5xl lg:text-6xl font-varela tracking-tight leading-snug">
              <div className='recent2'>Our recent<span className='text-emerald-400'> web</span></div>
              <div className='recent3'><span className='text-emerald-400'>designs</span> &</div>
              <div className='recent4'>some examples of</div>
              <div className='recent5'>past<span className='text-emerald-400'> projects</span></div>
            </div>
            <img src="Phlox/divider.svg" alt="" className="recent6 mt-10 scale-90" />
          </div>
          <div className="recent7 md:w-1/2 self-end ml-4 md:ml-0 mr-4 text-justify">
            <div className="text-md text-zinc-600 my-8 mt-16 md:mt-40">We have worked on and learned from numbers of websites. And here are some of the most recent works. We have also included our upcoming projects which are gonna be finished in the near future. More and more artworks to be added.</div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-2 mt-20 h-full">
          <div className="w-full relative group hover:scale-105 hover:-translate-y-2 transform duration-500">
            <div className="frame1 h-full group-hover:shadow-2xl duration-500">
              <div className="absolute top-0 left-0 w-full h-full rounded gradient-overlay">
                <div className="absolute bottom-16 left-4 text-lg md:text-xl font-medium font-varela transform duration-500">Project - 'The Office'</div>
                <div className="absolute bottom-6 left-4 text-base md:text-lg font-varela transform duration-500">Perfect office products</div>
              </div>
              <img src="Phlox/photo-1448932252197-d19750584e56-1910x1910.jpg" alt="" className="h-full rounded" />
            </div>
          </div>
          <div className="w-full relative group hover:scale-105 hover:-translate-y-2 transform duration-500">
            <div className="frame2 h-full group-hover:shadow-2xl duration-500">
              <div className="absolute top-0 left-0 w-full h-full rounded gradient-overlay">
                <div className="absolute bottom-16 left-4 text-lg md:text-xl font-medium font-varela transform duration-500">Project - Ferris Wheel</div>
                <div className="absolute bottom-6 left-4 text-base md:text-lg font-varela transform duration-500">Design for a carnival page.</div>
              </div>
              <img src="Phlox/sunisa-misa-531163-unsplash-1910x1910.jpg" alt="" className="h-full rounded" />
            </div>
          </div>
          <div className="w-full relative group hover:scale-105 hover:-translate-y-2 transform duration-500">
            <div className="frame3 h-full group-hover:shadow-2xl duration-500">
              <div className="absolute top-0 left-0 w-full h-full rounded gradient-overlay">
                <div className="absolute bottom-16 left-4 text-lg md:text-xl font-medium font-varela transform duration-500">Project - BoatRace</div>
                <div className="absolute bottom-6 left-4 text-base md:text-lg font-varela transform duration-500">Surfing boards sales website.</div>
              </div>
              <img src="Phlox/business-competition-PB366D8-1910x1910.jpg" alt="" className="h-full rounded" />
            </div>
          </div>
          <div className="w-full relative group hover:scale-105 hover:-translate-y-2 transform duration-500">
            <div className="frame4 h-full group-hover:shadow-2xl duration-500">
              <div className="absolute top-0 left-0 w-full h-full rounded gradient-overlay">
                <div className="absolute bottom-16 left-4 text-lg md:text-xl font-medium font-varela transform duration-500">Project - FruityShop</div>
                <div className="absolute bottom-6 left-4 text-base md:text-lg font-varela transform duration-500">Exotic fruits shop.</div>
              </div>
              <img src="Phlox/cody-davis-253928-unsplash-1910x1910.jpg" alt="" className="h-full rounded" />
            </div>
          </div>
          <div className="w-full relative group hover:scale-105 hover:-translate-y-2 transform duration-500">
            <div className="frame5 h-full group-hover:shadow-2xl duration-500">
              <div className="absolute top-0 left-0 w-full h-full rounded gradient-overlay">
                <div className="absolute bottom-16 left-4 text-lg md:text-xl font-medium font-varela transform duration-500">Project - Flora</div>
                <div className="absolute bottom-6 left-4 text-base md:text-lg font-varela transform duration-500">Flower shop</div>
              </div>
              <img src="Phlox/ina-soulis-227104-unsplash-1910x1910.jpg" alt="" className="h-full rounded" />
            </div>
          </div>
          <div className="w-full relative group hover:scale-105 hover:-translate-y-2 transform duration-500">
            <div className="frame6 h-full group-hover:shadow-2xl duration-500">
              <div className="absolute top-0 left-0 w-full h-full rounded gradient-overlay">
                <div className="absolute bottom-16 left-4 text-lg md:text-xl font-medium font-varela transform duration-500">Project - Cozy Home</div>
                <div className="absolute bottom-6 left-4 text-base md:text-lg font-varela transform duration-500">Home furniture sales site.</div>
              </div>
              <img src="Phlox/cozy-sofa-in-living-room-PQR5AB9-1910x1910.jpg" alt="" className="h-full rounded" />
            </div>
          </div>
          <div className="w-full relative group hover:scale-105 hover:-translate-y-2 transform duration-500">
            <div className="frame7 h-full group-hover:shadow-2xl duration-500">
              <div className="absolute top-0 left-0 w-full h-full rounded gradient-overlay">
                <div className="absolute bottom-16 left-4 text-lg md:text-xl font-medium font-varela transform duration-500">Project - HotBallons</div>
                <div className="absolute bottom-6 left-4 text-base md:text-lg font-varela transform duration-500">Hot air ballon trip booking site.</div>
              </div>
              <img src="Phlox/aa9a4539-PQGJ7HU-1910x1910.jpg" alt="" className="h-full rounded" />
            </div>
          </div>
          <div className="w-full relative group hover:scale-105 hover:-translate-y-2 transform duration-500">
            <div className="frame8 h-full group-hover:shadow-2xl duration-500">
              <div className="absolute top-0 left-0 w-full h-full rounded gradient-overlay">
                <div className="absolute bottom-16 left-4 text-lg md:text-xl font-medium font-varela transform duration-500">Project - Matching Shoes</div>
                <div className="absolute bottom-6 left-4 text-base md:text-lg font-varela transform duration-500">Fashion Planner Blog.</div>
              </div>
              <img src="Phlox/355H-1910x1910.jpg" alt="" className="h-full rounded" />
            </div>
          </div>
        </div>
        <button className='frame9 inline mx-auto text-sm font-light px-10 py-4 mt-20 xl:mt-48 mb-8 rounded-full text-white gradient-button hover:shadow-xl transform duration-500'>
          EXPLORE
        </button>
      </section>

      {/* Section - 5 */}

      <section className="anim-start4 bg-zinc-50 pb-16">
        <div className="md:flex relative mx-4 lg:mx-10 py-32 lg:py-36">
          <div className="users rounded-xl md:w-4/5 lg:w-3/5">
            <div className="relative h-long">
              <div className="h-full w-full">
                <img src="Phlox/person-with-long-curly-hair-PZ99QM2@2x.jpg" alt="" className="rounded-2xl h-full" />
              </div>
              <div className="absolute top-0 left-0 bg-gradient-to-br from-lime-500 via-green-500 to-teal-500 w-full h-full rounded-2xl opacity-80">
                <div className="flex flex-col space-y-8 justify-center items-center text-white font-varela mt-44">
                  <div className="text-9xl">29</div>
                  <div className="text-neutral-200">PROJECTS</div>
                  <div className="flex">
                    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-16">
                      <div>
                        <div className="text-2xl md:text-3xl lg:text-4xl text-center">+1,370</div>
                        <div className="text-lg text-neutral-200 text-center">USER COMMENTS</div>
                      </div>
                      <div className="h-4/5 self-center w-0.5 bg-white opacity-80"></div>
                      <div>
                        <div className="text-2xl md:text-3xl lg:text-4xl text-center">100%</div>
                        <div className="text-lg text-neutral-200 text-center">HAPPY CLENTS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="users2 ml-2 rounded-xl md:w-3/5 lg:w-1/2 md:absolute md:top-72 left-1/2 shadow-xl pb-6 bg-white">
            <div className="mx-4 sm:mx-12 lg:mx-20 my-12 lg:my-24">
              <div className="text-5xl lg:text-6xl font-varela tracking-tight leading-snug">
                <div>We <span className='text-emerald-400'>Love </span>What</div>
                <div>We Do</div>
              </div>
              <img src="Phlox/divider.svg" alt="" className="mt-10 scale-90" />
              <div className="text-md text-zinc-600 my-8">With us, your project isn't just as valuable as any other project. We care for it, handle it like a mother does with her baby. Our team is composed of many greatly gifted and the most passionate artists, designers and programers. With these brilliant minds and their immense interest in producing the best piece of art they can, we all dedicate ourselves to whatever work that comes our way.</div>
              <div className="flex flex-col space-y-4">
                <div className="mx-2 sm:mx-8 flex items-center space-x-2">
                  <BsCheck className="text-emerald-400 w-5 h-5" />
                  <div>Coordinated skills</div>
                </div>
                <div className="mx-2 sm:mx-8 flex items-center space-x-2">
                  <BsCheck className="text-emerald-400 w-5 h-5" />
                  <div>Great time management</div>
                </div>
                <div className="mx-2 sm:mx-8 flex items-center space-x-2">
                  <BsCheck className="text-emerald-400 w-5 h-5" />
                  <div>Skilled communications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - 6 */}

      <section className="anim-start5 bg-zinc-100 pt-64 pb-48">
        <div className="lg:flex">
          <div className="lg:w-1/4 mx-6">
            <div className="lcs text-5xl font-varela tracking-tight leading-snug">
              <div>With</div>
              <div><span className='text-emerald-400'>Live Chat </span></div>
              <div><span className='text-emerald-400'>24/7 </span>Support</div>
            </div>
            <img src="Phlox/divider.svg" alt="" className="lcs2 mt-10 scale-90" />
            <div className="lcs3 text-md text-zinc-600 my-8 mr-2">We are always available for any kind of feedback, questions or inquiry. Our custoers support is on stand-by 24/7 to fulfil every needs of our clients and customers.</div>
          </div>
          <div className="lg:w-3/4 flex flex-col items-center sm:items-start sm:flex-row relative space-x-2 lg:space-x-6 mx-2 lg:mx-6">
            <div className="price w-5/6 sm:w-1/3 mb-6 sm:mb-0">
              <div className="bg-white pb-6 shadow space-y-3 hover:-translate-y-2 hover:shadow-2xl duration-500 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-zinc-600 to-black text-4xl sm:text-2xl xl:text-4xl text-white text-center py-10 mb-10">
                  <div className="bg-white py-6">
                    <div className="text-3xl sm:text-xl xl:text-3xl text-zinc-700">DESIGNING</div>
                    <div className="text-base text-zinc-500">All Designs</div>
                  </div>
                  $<span className="text-5xl sm:text-3xl xl:text-5xl">240 </span> / Design</div>
                <div className="flex flex-col items-center">
                  <div className="mx-2 lg:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">Delivery within a week</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">UI plans included</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">A month of feedback time</div>
                  </div>
                  {/* <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">Lorem ipsum dolor sit.</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">Lorem ipsum dolor sit.</div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="price2 w-5/6 sm:w-1/3 z-20">
              <div className="bg-white pb-6 -translate-y-5 shadow-lg space-y-3 hover:-translate-y-10 hover:shadow-2xl duration-500 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-lime-400 to-teal-400 text-4xl sm:text-2xl xl:text-4xl text-white text-center py-10 mb-10">
                  <div className="bg-white py-6">
                    <div className="text-3xl sm:text-xl xl:text-3xl text-zinc-700">DEVELOPMENT</div>
                    <div className="text-base text-zinc-500">Wordpress Projects</div>
                  </div>
                  $<span className="text-5xl sm:text-3xl xl:text-5xl">560 </span> / Project</div>
                <div className="flex flex-col items-center">
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">Delivery within a week</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">UI plans included</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-amber-400 w-8 h-8" />
                    <div className="text-lg sm:text-base text-emerald-400 xl:text-lg">3 months of feedback time</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-amber-400 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-emerald-400">Source code included</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-amber-400 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-emerald-400">Search engine optimization</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="price3 w-5/6 sm:w-1/3 mb-3 sm:mb-0">
              <div className="bg-white pb-6 shadow space-y-3 hover:-translate-y-2 hover:shadow-2xl duration-500 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-zinc-600 to-black text-4xl sm:text-2xl xl:text-4xl text-white text-center py-10 mb-10">
                  <div className="bg-white py-6">
                    <div className="text-3xl sm:text-xl xl:text-3xl text-zinc-700">SEO</div>
                    <div className="text-base text-zinc-500">Web Products</div>
                  </div>
                  $<span className="text-5xl sm:text-3xl xl:text-5xl">200 </span> / Product</div>
                <div className="flex flex-col items-center">
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">Search engine optimization</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">Delivery within a week</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">UI plans included</div>
                  </div>
                  {/* <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">Lorem ipsum dolor sit.</div>
                  </div>
                  <div className="mx-2 xl:mx-8 flex items-center space-x-2">
                    <BsCheck className="text-neutral-700 w-8 h-8" />
                    <div className="text-lg sm:text-base xl:text-lg text-zinc-600">Lorem ipsum dolor sit.</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - 7 */}

      <section className="h-full pb-24 bg-zinc-100">
        <div className="relative h-full">
          <div className="h-full w-full bg-zinc-900 absolute top-0 left-0 opacity-80">
            <div className="flex flex-col items-center">
              <div className="font-varela text-emerald-400 text-4xl md:text-9xl scale-125 mt-6 lg:mt-20">"</div>
              <div className="text-white text-base sm:text-base lg:text-3xl md:font-light italic text-center mx-3 sm:mx-6 lg:mx-56 sm:mt-12 tracking-wide md:leading-10">When it comes to barbequing, there are two main schools of thoughts for the techniques of that you can use. Freshly scrambled eggs with applewood smoked bacon - are amazing!</div>
              <div className="bg-gradient-to-r from-lime-400 to-teal-400 mx-auto my-2 sm:my-4 lg:my-12 p-1 inline-block rounded-full">
                <img src="Phlox/img3-822x822.jpg" alt="" className="w-12 lg:w-28 h-12 lg:h-28 rounded-full" />
              </div>
              <div className="text-emerald-500 text-xl md:text-3xl uppercase">Larry Dublin</div>
              <div className="text-emerald-300 sm:text-white text-base md:text-xl">Client</div>
            </div>
          </div>
          <img src="Phlox/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg" alt="" className="" />
        </div>
      </section>

      {/* Section - 8 */}

      <section className="bg-zinc-100 pt-48 pb-24 px-4">
        <div className="Blogflex flex-col font-varela items-center">
          <div className='blog text-3xl md:text-5xl'> Latest News & Our <span className="text-emerald-400">Blog</span></div>
          <img src="Phlox/divider.svg" alt="" className="blog2 scale-90 my-16" />
          <div className="grid sm:grid-cols-2 items-stretch justify-items-stretch md:gap-3 lg:gap-0 lg:flex lg:space-x-6">
            <div className="blog3 lg:w-1/3 mx-2 md:mx-0 mb-16">
              <div className="relative flex flex-col items-center rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 duration-500">
                <div className="overflow-hidden group rounded-xl">
                  <img src="Phlox/Businessman-at-the-desk-in-his-office-resting.-2290x1717.jpg" alt="" className="rounded-xl group-hover:scale-105 duration-500" />
                </div>
                <div className="absolute -bottom-10 rounded-xl bg-white shadow-xl px-16 py-4 gradient-card group">
                  <div className="text-xs text-zinc-600 group-hover:text-white duration-500 mb-2">May 14, 2022 - By Daniel</div>
                  <div className="flex items-center text-xl text-zinc-800 group-hover:text-white duration-500 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400  group-hover:bg-white duration-500"></div>
                    <div className="">Marketing Ideas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog4 lg:w-1/3 mx-2 md:mx-0 mb-16">
              <div className="relative flex flex-col items-center rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 duration-500">
                <div className="overflow-hidden group rounded-xl">
                  <img src="Phlox/serious-businesswoman-with-documents-talking-on-P9Q6LX6-2290x1717.jpg" alt="" className="rounded-xl group-hover:scale-105 duration-500" />
                </div>
                <div className="absolute -bottom-10 rounded-xl bg-white shadow-xl px-16 py-4 gradient-card group">
                  <div className="text-xs text-zinc-600 group-hover:text-white duration-500 mb-2">May 20, 2022 - By Daniel</div>
                  <div className="flex items-center text-xl text-zinc-800 group-hover:text-white duration-500 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400  group-hover:bg-white duration-500"></div>
                    <div className="">Rest During Working Hours</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog5 lg:w-1/3 mx-2 md:mx-0 mb-16">
              <div className="relative flex flex-col items-center rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 duration-500">
                <div className="overflow-hidden group rounded-xl">
                  <img src="Phlox/simple-home-office-with-tree-PBXRXYB-large-1990x1492.jpg" alt="" className="rounded-xl group-hover:scale-105 duration-500" />
                </div>
                <div className="absolute -bottom-10 rounded-xl bg-white shadow-xl px-16 py-4 gradient-card group">
                  <div className="text-xs text-zinc-600 group-hover:text-white duration-500 mb-2">May 22, 2022 - By Daniel</div>
                  <div className="flex items-center text-xl text-zinc-800 group-hover:text-white duration-500 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400  group-hover:bg-white duration-500"></div>
                    <div className="">Develop Your StartUp Idea</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className='inline mx-auto text-sm font-light px-10 py-4  mt-32 mb-8 rounded-full text-white gradient-button hover:shadow-xl transform duration-500'>
            VIEW ALL POSTS
          </button>
        </div>
      </section>

      {/* Section - 9 */}

      <section className="anim-start6 pt-48 pb-16 flex flex-col bg-zinc-50">
        <div className="md:flex md:space-x-2 lg:space-x-6 mx-6 md:mx-4">
          <div className="bg-gradient-to-r from-zinc-800 to-black px-4 sm:px-8 py-8 md:w-1/2 flex flex-col items-center rounded-2xl shadow-xl mb-6">
            <div className="text-zinc-400 text-base font-varela mt-8 text-center">Are you ready?</div>
            <div className="text-zinc-300 text-3xl lg:text-5xl font-varela mt-8 text-center">Let's Talk About Work</div>
            <div className="relative flex items-center w-full mt-16 mb-10">
              <input type="text" className="w-full px-4 py-4 bg-neutral-500 text-zinc-300 text-opacity-100 bg-opacity-30 rounded-full  sm:mx-4 lg:mx-16 focus:outline-none" placeholder='Email Address' />
              <button className="absolute right-10 lg:right-20 text-zinc-300 font-varela text-sm font-semibold">SUBMIT</button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-lime-500 via-green-500 to-teal-500 px-4 sm:px-8 py-8 md:w-1/2 flex flex-col items-center rounded-2xl shadow-xl mb-6">
            <div className="text-zinc-200 text-base font-varela mt-8 text-center">Are you ready?</div>
            <div className="text-white text-3xl lg:text-5xl font-varela mt-8 text-center">Start a New Project</div>
            <button className='inline mx-auto text-sm font-light px-10 py-4  mt-16 mb-10 rounded-full text-white gradient-button hover:shadow-xl transform duration-500'>
              START NOW
            </button>
          </div>
        </div>
        <div className="lg:flex items-center justify-between lg:space-x-24 mx-3 sm:mx-6 md:mx-14 my-24">
          <div className="flex items-center justify-between w-full">
            <img src="Phlox/client-1@2x.png" alt="" className="scale-75 sm:scale-90 md:scale-100" />
            <img src="Phlox/client-3@2x.png" alt="" className="scale-75 sm:scale-90 md:scale-100" />
            <img src="Phlox/client-4@2x.png" alt="" className="scale-75 sm:scale-90 md:scale-100" />
          </div>
          <div className="mt-12 lg:mt-0 flex items-center justify-between w-full">
            <img src="Phlox/client-5@2x.png" alt="" className="scale-75 sm:scale-90 md:scale-100" />
            <img src="Phlox/client-7@2x.png" alt="" className="scale-75 sm:scale-90 md:scale-100" />
            <img src="Phlox/client-9@2x.png" alt="" className="scale-75 sm:scale-90 md:scale-100" />
          </div>
        </div>
      </section>
      <footer className="pt-16">
        <div className="mx-4 sm:mx-8 pb-24 sm:grid sm:grid-cols-2 sm:gap-x-4 md:gap-x-6 items-center lg:flex lg:space-x-8">
          <div className="flex flex-col self-start lg:w-1/4">
            <div className="hidden sm:flex items-center lg:w-56">
              <img src="logo192.png" alt="" className="w-2/5 scale-50" />
              <div className="font-semibold">DLUX BUSINESS</div>
            </div>
            <div className="text-md text-zinc-600 hidden lg:block">Not just a business!</div>
          </div>
          <div className="lg:w-1/4 mt-8 sm:self-start">
            <div className="text-3xl font-varela text-zinc-700">QUICK LINKS</div>
            <img src="Phlox/divider.svg" alt="" className="scale-90 my-6" />
            <a href='//' className="block text-zinc-600 hover:text-emerald-400 duration-500 my-2">Careers</a>
            <a href='//' className="block text-zinc-600 hover:text-emerald-400 duration-500 my-2">News</a>
            <a href='//' className="block text-zinc-600 hover:text-emerald-400 duration-500 my-2">Terms of Use</a>
            <a href='//' className="block text-zinc-600 hover:text-emerald-400 duration-500 my-2">Private Projects</a>
            <a href='//' className="block text-zinc-600 hover:text-emerald-400 duration-500 my-2">About</a>
          </div>
          <div className="lg:w-1/4 mt-8 sm:self-start">
            <div className="text-3xl font-varela text-zinc-700">CONTACT</div>
            <img src="Phlox/divider.svg" alt="" className="scale-90 my-6" />
            <div className="flex flex-col space-y-8">
              <div className="text-zinc-600">Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051</div>
              <div className="text-zinc-600">info@yourdomain.com</div>
              <div className="text-zinc-600">+99 (0) 101 0000 888</div>
            </div>
          </div>
          <div className="lg:w-1/4 mt-8 sm:self-start">
            <div className="text-3xl font-varela text-zinc-700">LOCATION</div>
            <img src="Phlox/divider.svg" alt="" className="scale-90 my-6" />
            <div className="relative w-fit">
              <img src="Phlox/vt (3).png" alt="" className="" />
              <img src="Phlox/spotlight-poi2.png" alt="" className="absolute left-1/2 top-1/2" />
            </div>
          </div>
          <div className="sm:hidden flex flex-col items-center">
            <div className="flex items-center w-full">
              <img src="logo192.png" alt="" className="w-2/5 scale-50" />
              <div className="font-semibold">DLUX BUSINESS</div>
            </div>
            <div className="text-md text-zinc-600">Not just a business!</div>
          </div>
        </div>
        <div className="px-3 sm:px-8 flex items-center justify-between py-4 sm:py-12 bg-gradient-to-r from-zinc-700 to-zinc-900">
          <div className="text-zinc-400 text-xs sm:text-sm">© 2022 DLUX BUSINESS THEME.</div>
          <div className="flex space-x-8 sm:mr-16 items-center">
            <BsFacebook className='w-6 h-6 text-zinc-300 opacity-75 hover:opacity-100 hover:text-emerald-400 duration-500' />
            <BsTwitter className='w-6 h-6 text-zinc-300 opacity-75 hover:opacity-100 hover:text-emerald-400 duration-500' />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
