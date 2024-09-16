import { app } from '@/main'
import { StateScreen } from '@/navigation.ts'
import { Container, Graphics } from 'pixi.js'

export class Game extends Container implements StateScreen {
    constructor() {
        super()
        const square = new Graphics().rect(0, 0, 100, 100).fill('0xffddff')
        this.addChild(square)
    }

    resize = () => {
        this.width = app.stage.width
        this.height = app.stage.height
    }
}
