export default function Header() {
    return(
        <header className="header">
            <img src="../avatar.png" className="avatar" alt="avatar" />
            <nav>
                <ul className="nav-list" >
                    <li>
                        <a href="https://complex-work-651176.framer.app" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    </li>
                    <li>
                        <a href="https://www.notion.so/220bbb505fc6801f9b10f2646a67375e?v=220bbb505fc680fa9f62000cf977f12c&source=copy_link" target="_blank" rel="noopener noreferrer">Knowkedge Hub</a>
                    </li>
                    <li>
                        <a href="https://github.com/michelle5434123" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}