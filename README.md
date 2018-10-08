# ReactApp
Fraemwork based on the react. (React + RxJS)

# React + RxJS
Я люблю Angular, он имеет продуманную структуру и все необходимое для разработки приложений.
Писать приложения с Angular легко и приятно. Во многом благодаря сервсим и RxJS.
К сожаленью не всегда удается писать на том на чем нравиться. 
Иногда приходиться писать и вовсе на том с чем раньше не был знаком.

React + Redux? 
Множество actions, лолкальные состояния копонентов, глобальные состояния, организация хранилища правильной структуры...
Хммм... А может...

Да может! React + RxJS и сервисы одиночки для всего приложения.
Плюс пара конфигурационных фалов для роутинга и описания компонентов и сервисов.
Единнная точка входа и TypeScript. Кажется это то что нужно для счастья разработчика!

# Время примеров
Конфигурационный файл приложения
```ts
export const REACT_APP: IReactAppConfig = {
    components: [
        HeadComponent,
    ],
    rootComponent: AppComponent,
    services: [{
        name: 'ApplicationService',
        constructor: ApplicationSerrvice
    },{
        name: 'MoreService',
        constructor: ApplicationSerrvice
    }],
};
```
Конфигурация маршрутов
```ts
export const ROUTING: IRoutingConfig[] = [{
    component: HeadComponent,
    path: '/home',
}];
```
Подключение экземпляра сервиса в компонент
```ts
@ConectToService({
    component: HeadComponent,
    service: 'ApplicationService'
})

export class HeadComponent extends React.Component<IHeadComponentProps> {
    private timeService: ApplicationSerrvice;
    public state: IHeadComponentState;

    constructor(props: any) {
        super(props);
        this.state = {
            time: 0
        };
    }

    componentDidMount() {
        this.props.service.workTime.subscribe(time => this.setState({ time: time}));
    }

    public render() {
        return (
            <div>
                <h1>Head</h1>
                <span>Page time:</span>
                <span>{this.state.time}</span>
            </div>
        );
    }
}
```

# Внимание
Проект на стадии идеи и эксперемента. Интересно развитие? Ставь звездочки и подписывайся.
