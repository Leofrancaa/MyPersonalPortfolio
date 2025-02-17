export default function Footer() {
  return (
    <footer className="relative z-40 bg-black px-32 py-8 bottom-0 w-full">
      <section className="flex justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-2xl">Contact me</p>
          <ul className="flex flex-col gap-1">
            <li>
              Email:{" "}
              <a href="" className="text-blue-600">
                francaleonardo902@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a href="" className="text-blue-600">
                Leofrancaa
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a href="" className="text-blue-600">
                Lorem Ipsum
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-2xl">Site map</p>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Impossible List</a>
            </li>
            <li>
              <a href="">Curriculum</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
