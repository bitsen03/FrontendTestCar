import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorInput from "./ColorInput.tsx";
import { addTask } from "../../redux/taskSlice.js";
import { selectTasksId } from "../../redux/taskSlice.js";
import { selectCurrentDate } from "../../redux/currentDateSlice.js";
import ModalContent from "./ModalContent.tsx";
import { dayString, monthString } from "../../help/getDates.ts";

const colors = [
  'rgb(206, 237, 199)', 
  'rgb(255, 148, 148)', 
  'rgb(255, 212, 178)', 
  'rgb(255, 246, 189)', 
  'rgb(215, 227, 252)', 
  'rgb(255, 200, 221)'
];

const CreateTask: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  const dispatch = useDispatch();
  const {year, month, day} = useSelector(selectCurrentDate);
  const id = `${year}/${monthString(month)}/${dayString(day)}`
  const tasks = useSelector(state => selectTasksId(state, id))
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  const handleDispatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask( {id: id, value:{ selectedColor, name, time, id }}));
    setSelectedColor(colors[0]);
    setName('');
    setTime('');
  };

  return (
    <>
    <div className="currentDate-modal">
        {id}
    </div>
     <form onSubmit={handleDispatch} className="form-CreateTask">
      <div className="div-input">
        <label className="name-task">Name</label>
        <input
          className="input-nameTask input-modal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="task"
          id="name"
          placeholder="Study"
          required
        />
      </div>
      <div className="div-input">
        <label className="time-task">Time</label>
        <input
          className="input-modal"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="time"
          required
        />
      </div>
      <div className="div-input">
        <label>Color</label>
        <div className="colors-radio">
          {colors.map((color, index) => (
            <ColorInput
              color={color}
              key={index}
              id={index}
              selectedColor={selectedColor}
              onColorSelect={handleColorSelect}
            />
          ))}
        </div>
      </div>
      <div className="div-input">
        <input className="btn-modal" type="submit" value="Add" />
      </div>
      {
         tasks === undefined || tasks.length === 0 ? null : (
          <div className="all-task">
          <span className="task-title">Task</span>
          {tasks.map((el, i) =><ModalContent key={i} index={i} id={id} >{el}</ModalContent>)}
          </div>
        )
      }
    </form>
    </>
  );
};

export default CreateTask;
