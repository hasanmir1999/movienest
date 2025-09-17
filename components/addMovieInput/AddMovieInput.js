export default function AddMovieInput({ title, formData, setFormData, icon , Key }) {
  return (
    <>
      <div className="col w-full sm:w-1/2 lg:w-1/4 p-2">
        <div className="input-container flex flex-col items-start gap-3 relative">
          <label htmlFor={title} className="text-gray-300 text-sm">
            {title}* :
          </label>
          <input
            type="text"
            id={title}
            value={formData[Key]}
            onChange={(e) =>
              setFormData({ ...formData, [Key]: e.target.value })
            }
            className="border-gray-300 caret-orange-400 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
          />
          {icon}
        </div>
      </div>
    </>
  );
}
