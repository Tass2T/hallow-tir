import { Application } from 'pixi.js'
import { gameConfig } from '@/utils/gameConfig'
import { navigation } from './navigation'

export const app = new Application()

const resize = () => {
    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight
    const minWidth = gameConfig.display.width
    const minHeight = gameConfig.display.height

    const scaleX = innerWidth < minWidth ? minWidth / innerWidth : 1
    const scaleY = innerHeight < minHeight ? minHeight / innerHeight : 1
    const scale = scaleX > scaleY ? scaleX : scaleY

    const width = innerWidth * scale
    const height = innerHeight * scale

    app.renderer.canvas.style.width = `${width}px`
    app.renderer.canvas.style.height = `${height}px`

    window.scrollTo(0, 0)
    app.renderer.resize(width, height)
    navigation.resize()
}

await app.init({
    background: '#111111',
    resolution: Math.max(window.devicePixelRatio, 2),
})

document.body.appendChild(app.canvas)

window.addEventListener('resize', resize)

resize()

navigation.showScreen('game')
