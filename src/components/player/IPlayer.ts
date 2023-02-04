interface IPlayer{ //I sta per Interface
    create(): void;
    update(time: number, delta: number): void;
}

export default IPlayer;