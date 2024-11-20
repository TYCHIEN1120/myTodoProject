import { useState } from "react"

function CreateForm({addTodo}) {
    // 建立input內容的變數
    const [content, setContent] = useState('');

    const handleSubmit=(e)=>{
        // 取消事件預設行為增加todo內容
        e.preventDefault();
        // 增加todo內容
        addTodo(content);
        // 清除input內容
        setContent('');
    }

    return (
        <form className="creat-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="輸入代辦事項"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">加入</button>
        </form>
    )
}

export default CreateForm