import { Game } from '@/states/Game.ts'
import { Container, Ticker } from 'pixi.js'
import { app } from './main'

export interface StateScreen extends Container {
    resize?: () => void
    update?: (ticker: Ticker) => void
}

type State = 'game' | 'menu'

const STATES = {
    game: () => new Game(),
    menu: () => null,
}

class Navigation {
    currentState: StateScreen | null = null

    showScreen = (state: State) => {
        if (this.currentState) this.removeCurrentState()

        this.currentState = STATES[state]()
        if (this.currentState) app.stage.addChild(this.currentState)
    }

    removeCurrentState = () => {
        if (this.currentState) {
            app.stage.removeChild(this.currentState)
            this.currentState = null
        }
    }

    resize = () => {
        this.currentState?.resize?.()
    }
}

export const navigation = new Navigation()
