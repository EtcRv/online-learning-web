import { NavLink } from "react-router-dom";
import Footer from "../../UI/Footer/Footer";

const AuthenticationLayout = ({ children }) => {
  return (
    <section className="h-screen">
      <div>
        <div className="w-full  text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
          <div className="flex  justify-between p-6 mx-auto ">
            <div className="flex">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAC4ALgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAHCAQFBgID/9oACAEBAAAAAGaTcqbHXaSAj5zJGy6gJEwBasOoCiFM2SeoiulLaWNt5g+LXkYkf//EABgBAQADAQAAAAAAAAAAAAAAAAYDBQcC/9oACgICEAMQAAAAO6x1RXwk7qExC+Mhmp6duS//xAAyEAACAQIEAgcHBQEAAAAAAAABAgMEBQAGERITIQcQMTZBYXUVFiIkM1KzIzJCQ7LS/9oACAEBAAE/AM191r/6ZVfiOKagpJbVWVclwWOaJlEdORq0g8SMdGK1Xu7mSWjpIairSWLgRyAEM2mDWZxajaWPKtHxRUaFGC/SAJLfuxlkXKaneW5WyCknEnwLGo02aduoJ6s191r/AOmVX4j1dEtelJbrsnDeSSWoj4cSAktopwqXC43EJO+xIGVysbclP2nwJwnVmvutf/TKr8RxFHJLIscUbO7HRVUFiT5AY6OOPabTdnneOSdp4lSFHDFH0IVH05DFvoxS06qW3yMS0sn3ue04XqzX3Wv/AKZVfiOMriqNXXLSHSdrdUCMAgMSR2L546H6dGprrJL/AETptQ8grMhBOKbTgJoDppherMsTTZcvcSkbnt9Qo184yMP0cXqEktX0CkFB9V9QXOi/xxlBLvaI6mC4rTVblgUmSZQTt1BDkjczDzx7fPP5SLl2/Mr/AM4t1zkqalYzRqoJILCYPoVB5aADqvhAst0J8KOb/Bxd7HJX3SqrYq7gibgaLwtxBgIb7h4jFHlpqesjqDVodkE0e1Ydu7iqyhm+Lmfi549y34ar7RXkiIP0eRCntI3duMiUrW2dqWWpM7TVMswfZs0Lrq3ier//xAAkEQACAgAGAQUBAAAAAAAAAAABAgMEAAUREiExBhATIkFhcf/aAAgBAgEBPwDOwxeEK5Xjsf3CWljr1kQSPIzBNqaaAk9knCLtUDUn9xnz+3tfjhD3jLS6yVkkdH1hkZPor8gOv3X08ruSwXKaLOsSNE5JKbumGK2e2a+scN+CNeCSK/ZOPGcwtX6dmSxKshSyyKyrt1UKp6x//8QAJREAAgICAgEDBQEAAAAAAAAAAQIDEQQFABIGEyExBxAiMnGR/9oACAEDAQE/APp5G8mBnBZSlZCEkAGwBzyCX099sy+PCyiVX7ydrICAUACLHJpfVlZ+ipZ/Vbofy+eBTmDU7WUAErIp9zQ+OeVWu5z07AsZELsBQP4igPt4rs8jDinjTISJHa2LJ3sihzJ1+tzMqSWbMQM3UnrE4F/BoA82WPFj5TRxMGQD2YWL/wB5/9k="></img>

              <div className="flex flex-wrap items-center justify-center pl-6 ml-6 text-base border-l border-gray-200 md:mr-auto">
                <NavLink
                  className="mr-5 font-medium hover:text-gray-900"
                  to="/"
                  activeclassname="active"
                  exact="true"
                >
                  Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">{children}</div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default AuthenticationLayout;
