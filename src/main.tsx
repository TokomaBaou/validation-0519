import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  title: string;
};

export const Main: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm<FormData>();
  const handleOnSubmit = (data: FormData) => {
    console.log(data.title);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <input
          type="text"
          className={errors.title && "error"}
          name="title"
          ref={register({ required: "タイトルは必ず入力してください。" })}
        />
        {errors.title && (
          <span className="error-message">{errors.title.message}</span>
        )}
        <button className="btn is-primary">追加</button>
      </form>
      <div></div>
      <div></div>
    </div>
  );
};
