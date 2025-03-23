"use client"

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal items-center bg-neutral text-neutral-content p-10">
      <aside>
        <p className=" font-luckiest text-xl md:text-2xl">SAFAT</p>
        <p>
        Dedicated to learning and adapting to any technology or skill
          <br />
          needed to enhance projects, ensuring efficiency and innovation.
        </p>
      </aside>
      <nav>
      <p>&copy; {new Date().getFullYear()} Safat. All rights reserved.</p>
      </nav>
    </footer>
  )
}

export default Footer