import { NavLink } from "react-router-dom";

export const Navigation = ({textColor} : any) => {
  return (
    <div  className="flex gap-10 ">
      <NavLink style={{color: textColor}} className=" text-lg underline" to="/history">
        01. HISTORY
      </NavLink>
      <NavLink style={{color: textColor}} className=" text-lg underline" to="/team">
        02. TEAM
      </NavLink>
    </div>
  );
};
