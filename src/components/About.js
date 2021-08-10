function About() {
    return (
        <div className="text">
        <p><b>ShareNotes</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее просмотреть.
    После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
        <p>Как сделать заметку? </p>
        <ul>
            <li>Пройдите по ссылке</li>
            <li>Вставьте текст и нажмите Create</li>
            <li>Отправьте сгенерированный адрес другу!</li>
        </ul>
        <p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.</p>
    </div>
    );
}

export default About;