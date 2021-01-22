import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CloseLoginMenu, AppContext } from "../AppContext";

// Simple registration for on login menu, this is for user login
export default function LoginUserForm() {
  const { setShowUserMenu } = useContext(CloseLoginMenu);
  const { setLoginUser } = useContext(AppContext);
  const { register, handleSubmit, errors } = useForm();
  let loginParam;
  const onSubmit = (data) => {
    loginParam = {
      Type: "User",
      FirstName: data.FirstName,
      LastName: data.LastName,
      RestaurantName: null,
    };
    setLoginUser(loginParam);
    setShowUserMenu(false);
    console.log(loginParam);
  };
  return (
    <div>
      <form
        className="bg-white rounded px-4 pt-6 pb-3 mb-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              name="FirstName"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              ref={register({ required: true })}
            />
            {errors.FirstName && <span>This field is required</span>}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              name="LastName"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              ref={register({ required: true })}
            />
            {errors.LastName && <span>This field is required</span>}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <input
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          />

          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={() => setShowUserMenu(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
