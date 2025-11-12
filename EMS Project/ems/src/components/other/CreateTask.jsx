import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <form
          action=""
          className="flex flex-wrap w-full justify-between bg-[#1c1c1c] rounded-sm p-8 mt-3 items-center"
        >
          <div className="w-1/2 flex flex-col gap-5">
            <div>
              <h3>Task Title</h3>
              <input
                className="border-1 w-[70%] border-gray-400 px-2 py-1 rounded-sm"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3>Date</h3>
              <input
                className="border-1 w-[70%] border-gray-400 px-2 py-1 rounded-sm"
                type="date"
              />
            </div>
            <div>
              <h3>Assigned to</h3>
              <input
                className="border-1 w-[70%] border-gray-400 px-2 py-1 rounded-sm"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div>
              <h3>Category</h3>
              <input
                className="border-1 w-[70%] border-gray-400 px-2 py-1 rounded-sm"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="flex flex-col w-1/2 items-center">
            <h3 className="self-auto">Description</h3>
            <textarea
              className="border-1 w-[70%] border-gray-400 px-2 py-1 rounded-sm"
              name=""
              id=""
              cols="30"
              rows="8"
            ></textarea>
            <button className="border-1 w-1/2 mt-4 bg-green-400 font-medium cursor-pointer text-2xl py-2 rounded-sm border-none w-[70%] hover:bg-green-600">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask