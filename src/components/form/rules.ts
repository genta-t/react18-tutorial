export const textRule = (title: string) => ({
  required: `${title}は必須です〜`,
  minLength: {
    value: 4,
    message: "4文字以上で入力してください"
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