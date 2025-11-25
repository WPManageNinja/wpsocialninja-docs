<script>
import DefaultTheme from 'vitepress/theme'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vitepress'

const { Layout: DefaultLayout } = DefaultTheme

function injectVideo() {
  if (typeof window === 'undefined') return
  
  const path = window.location.pathname
  const isHomePage = path === '/' || path.endsWith('/index.html') || path === '/index.html'
  
  if (isHomePage) {
    // Use a more robust approach with multiple attempts
    const attemptInjection = (attempts = 0) => {
      const heroSection = document.querySelector('.VPHomeHero')
      
      if (heroSection) {
        // Remove existing video wrapper if it exists
        const existingVideo = heroSection.querySelector('.hero-video-wrapper')
        if (existingVideo) {
          existingVideo.remove()
        }
        
        // Inject new video
        const videoWrapper = document.createElement('div')
        videoWrapper.className = 'hero-video-wrapper'
        videoWrapper.innerHTML = `
          <iframe
            width="560"
            height="320"
            src="https://www.youtube.com/embed/da87i4ZR6OU?start=30"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        `
        heroSection.appendChild(videoWrapper)
      } else if (attempts < 10) {
        // Retry if hero section not found yet
        setTimeout(() => attemptInjection(attempts + 1), 100)
      }
    }
    
    attemptInjection()
  } else {
    // Remove video if not on homepage
    const heroSection = document.querySelector('.VPHomeHero')
    if (heroSection) {
      const existingVideo = heroSection.querySelector('.hero-video-wrapper')
      if (existingVideo) {
        existingVideo.remove()
      }
    }
  }
}

export default {
  setup() {
    const route = useRoute()
    
    onMounted(() => {
      injectVideo()
    })
    
    // Watch for route changes
    watch(() => route.path, () => {
      nextTick(() => {
        injectVideo()
      })
    }, { immediate: false })
    
    return () => h(DefaultLayout)
  }
}
</script>

