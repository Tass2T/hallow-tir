import { app } from '@/main'
import { StateScreen } from '@/navigation.ts'
import { Container, Graphics, Ticker } from 'pixi.js'

export class Game extends Container implements StateScreen {
    constructor() {
        super()
        this.resize()
        const square = new Graphics().rect(0, 0, 100, 100).fill('0xffddff')
        this.addChild(square)

        app.ticker.add(ticker => this.update(ticker))

        this.on('pointermove', event => {
            console.log('event')
        })
    }

    resize = () => {
        this.width = app.stage.width
        this.height = app.stage.height
    }

    update = (ticker: Ticker) => {}
}
