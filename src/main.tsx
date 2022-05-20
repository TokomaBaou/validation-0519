import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  title: string;
};

export const Main: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm<FormData>();
  //フォームが送信された時実行される関数。リセット関数でインプットに入力した値をクリアすることができる。
  const handleOnSubmit = (data: FormData) => {
    console.log(data.title);
    reset();
  };

  return (
    <div>
      {/* handleSubmitを設定 */}
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <input
          type="text"
          // エラー時のinputにスタイルを設定
          className={errors.title && "error"}
          name="title"
          //バリデーションはrelに設定。入力必須の場合設定
          ref={register({ required: "タイトルは必ず入力してください。" })}
        />
        {/* エラーがあった時に表示するメッセージ */}
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
