import "./forms.js";
import { CheckClassName,
  EmptyInput,
  HandleClick,
  MouseLeave,
  MouseLeaveRed,
  MouseOver,
  MouseOverRed,
  OpenDropDown,
  InsertNewUser
} from "./forms.js";

export default function Dropdown() {

  
  return (
    <div className="flex justify-center items-center h-[49rem]">
      <div className="w-1/4 h-5/6 flex flex-col justify-center items-center border-2 border-black">
        <div
          className="p-2 w-5/6 h-[3.5rem] border border-red-600 rounded-lg flex justify-between items-center cursor-pointer"
          onClick={OpenDropDown}
        >
          <p className="font-inter">Database Source</p>
          <div className="back-arrow bg-down-arrow w-6 h-6 bg-cover"></div>
        </div>
        <div className="a1 hidden w-5/6 h-[10.5rem] border border-red-500">
          <div
            className="Postgree cursor-pointer h-1/3 flex p-2 items-center justify-between border-b border-red-500"
            onClick={(e) => CheckClassName(e.target)}
            onMouseOver={MouseOver}
            onMouseLeave={MouseLeave}
          >
            <p className="font-inter" onMouseLeave={MouseLeave}>
              Postgree SQL
            </p>
          </div>
          <div
            className="Odoo cursor-pointer h-1/3 flex p-2 items-center justify-between border-b border-red-500"
            onClick={(e) => CheckClassName(e.target)}
            onMouseOver={MouseOver}
            onMouseLeave={MouseLeave}
          >
            <p className="font-inter" onMouseLeave={MouseLeave}>
              Odoo
            </p>
          </div>
          
        </div>
        <div className="db-details hidden w-5/6 flex flex-col">
          <div className="my-2">
            <input
              className="w-full h-[3rem] p-2 text-md  font-inter border border-red-600 rounded-lg"
              type="text"
            />
          </div>
          <div className="my-2">
            <input
              className="w-full h-[3rem] p-2 text-md  font-inter border border-red-600 rounded-lg"
              type="text"
            />
          </div>
          <div className="my-2">
            <input
              className="w-full h-[3rem] p-2 text-md  font-inter border border-red-600 rounded-lg"
              type="text"
            />
          </div>
          <div className="my-2">
            <input
              className="w-full h-[3rem] p-2 text-md  font-inter border border-red-600 rounded-lg"
              type="text"
            />
          </div>
          <div className="my-2">
            <input
              className="w-full h-[3rem] p-2 text-md  font-inter border border-red-600 rounded-lg"
              type="text"
            />
          </div>
          <div className="my-2">
            <input
              className="w-full h-[3rem] p-2 text-md  font-inter border border-red-600 rounded-lg"
              type="text"
            />
          </div>
        </div>

        <div className="buttons flex w-5/6 my-2">
          <div className="w-1/2">
            <button
              className="p-2 rounded-lg border-2 border-red-500 disabled:bg-red-200"
              onMouseOver={MouseOverRed}
              onMouseLeave={MouseLeaveRed}
              onClick={InsertNewUser}
            >
              Save
            </button>
          </div>
          <div className="flex w-1/2 justify-between">
            <button
              className="p-2 rounded-lg border-2 border-red-500"
              onClick={EmptyInput}
              onMouseOver={MouseOverRed}
              onMouseLeave={MouseLeaveRed}
            >
              Cancel
            </button>
            <button
              className="p-2 rounded-lg border-2 border-red-500"
              onMouseOver={MouseOverRed}
              onMouseLeave={MouseLeaveRed}
              onClick={HandleClick}
            >
              Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
