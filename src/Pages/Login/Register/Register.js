import React, { useContext } from "react";
import { Input, Ripple, initTE } from "tw-elements";
import { AuthProvider } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
initTE({ Input, Ripple });

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthProvider);
  const navigate = useNavigate()
  const handleRegisterForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    if (password !== confirmPassword) {
      toast.error("Password did not match.try again");
    } else {
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          if (user) {
            toast.success("user created successfully");
            navigate('/')
            form.reset();
          }
        })
        .catch((err) => console.log(err));
    }

    // console.log(email, password, confirmPassword);
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        navigate('/');
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="h-screen ">
      <div className="h-full container  w-full lg:w-4/5 mx-auto">
        <div className="g-6 flex h-full  items-center justify-center lg:justify-between">
          <div className="shrink-1 hidden md:block mb-12 grow-0 basis-auto md:mb-0 md:w-1/2 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://i.ibb.co/YR0jV30/draw2.webp"
              className="w-full"
              alt=""
            />
          </div>

          <div className="mb-12 md:mb-0 md:mr-5 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleRegisterForm}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg font-bold">Sign in with</p>

                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-10"
                    fill="currentColor"
                    style={{ color: "#FFFFFF" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>
              <div className=" mb-6">
                <input
                  type="text"
                  name="email"
                  className=" input input-bordered w-full focus:outline-none border-b-2 border-r-0 border-l-0 border-t-0"
                  id="exampleFormControlInput3"
                  placeholder="Email address"
                />
              </div>
              <div className=" mb-6">
                <input
                  type="password"
                  name="password"
                  className=" input input-bordered w-full focus:outline-none border-b-2 border-r-0 border-l-0 border-t-0"
                  id="exampleFormControlInput3"
                  placeholder="Password"
                />
              </div>
              <div className=" mb-6">
                <input
                  type="password"
                  name="confirm"
                  className=" input input-bordered w-full focus:outline-none border-b-2 border-r-0 border-l-0 border-t-0"
                  id="exampleFormControlInput3"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Register
                </button>

                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Already have an account ?
                  <Link
                    to="/login"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 ml-1"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
