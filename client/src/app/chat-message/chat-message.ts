export class ChatMessage {

    constructor(
        public msg: string,
        public time: Date,
        public isSender: boolean
    ) { }

}