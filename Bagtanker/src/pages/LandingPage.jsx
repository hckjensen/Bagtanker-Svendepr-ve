import SideNav from "../components/SideNav/SideNav"
import Logo from "../components/Header/Logo"



const LandingPage = () => {
    document.title = "Bagtanker"
    const navItems = [
        { name: 'Forside', link: '/' },
        { name: 'Produkter', link: '/home/produkter/rundstykker' },
        { name: 'Nyheder', link: '/home/nyheder' },
        { name: 'Kontakt', link: '/home/kontakt' },
        { name: 'Login', link: '/home/login' }
    ]

    const logoText = "Bagtanker"

    return (
        <div>

            <Logo title={logoText} />
            <SideNav items={navItems} />

        </div>
    )
}

export default LandingPage