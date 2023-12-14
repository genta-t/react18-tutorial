export const textRule = (title: string) => ({
  required: `${title}は必須です〜`,
  minLength: {
    value: 2,
    message: "2文字以上で入力してください"
  }
})

export const emailRule = { 
  required: "メールアドレスは必須です〜",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "正しい形式で入力してください"
  }
}

export const passwordRule = {
  required: "パスワードは必須です〜",
  minLength: {
    value: 6,
    message: "6文字以上で入力してください"
  }
}

export const phoneNumberRule = {
  minLength: {
    value: 6,
    message: "「電話番号」の入力文字数が少なすぎます",
  },
  maxLength: {
    value: 13,
    message: "「電話番号」の入力文字数が多すぎます",
  },
  pattern: {
    value: /^[0-9-]+$/,
    message: "「電話番号」の入力形式が正しくありません",
  },
};

export const previousDate = (date: string, messageDate: string) => {
  return (value: string) => {
    const selectedDate = new Date(value);
    const conditionDate = new Date(date);
    return selectedDate <= conditionDate || `${messageDate}年以前の日付を入力してください`;
  }
}

export const ageConfirmation = (age: number) => {
  return (value: string) => {
    const inputDate = new Date(value);
    const nowDate = new Date();
    const myAge = nowDate.getFullYear() - inputDate.getFullYear();
    return myAge > age || `${age}歳以上ですか？`;
  }
}

export const fileType = (fileTypesArray: string[]) => {
  return (value: any) => {
    const fileType = value ? value[0].name.split(".").pop() : "";
    if (!fileTypesArray.includes(fileType)) {
      return `ファイル形式は${fileTypesArray.join(",")}でお願いします。`
    }
  }
}