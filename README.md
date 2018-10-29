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
    rootComponent: AppComponent,
    components: [
        HeadComponent,
    ],
    services: [
        ApplicationSerrvice,
        DelayService,
        CountService
    ],
};
```
Конфигурация маршрутов
```ts
export const ROUTING: IRoutingConfig[] = [{
    component: HeadComponent,
    path: '/home',
}];
```
Подключение экземпляров сервисов в компонент
```ts
@InjectServices({
    target: HeadComponent,
    services: [ ApplicationSerrvice, CountService, DelayService ]
})

export class HeadComponent extends React.Component<IHeadComponentProps> {
    private timeService: ApplicationSerrvice;
    public state: IHeadComponentState;

    constructor(props: any) {
        super(props);
        this.state = {
            time: null,
            count: null,
            delay: null
        };
    }

    componentDidMount() {
        this.props.service.workTime.subscribe(time => this.setState({ time: time}));
        this.props.countService.currentCount.subscribe(count => this.setState({ count: count }));
        this.props.delayService.delayTime.subscribe(d => this.setState({ delay: d }));
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
Подключение зависисмых сервисов
```ts
@Injector({
    target: ApplicationSerrvice,
    services: [CountService, DelayService]
})
export class ApplicationSerrvice {
constructor (
        private countService: CountService,
        private delayService: DelayService
    ) { }
}
```
# Внимание
Проект на стадии идеи и эксперемента. Интересно развитие? Ставь звездочки и подписывайся.
