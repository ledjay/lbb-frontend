import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter">
            💋 Fait avec amour par <a href="http://jeremie-gisserot.me">Jérémie Gisserot</a>
          </h3>
        </div>
      </Container>
    </footer>
  )
}
