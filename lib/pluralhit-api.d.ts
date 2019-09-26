export declare type MailAddress = string | {
    name: string;
    address: string;
};
export interface EmailMessage {
    user: string;
    secret: string;
    service?: string;
    email: {
        from: MailAddress[];
        to: MailAddress[];
        subject: string[];
        htmlBody: string[];
        sender?: MailAddress[];
        replyTo?: MailAddress[];
        textBody?: string[];
        headers?: {
            [key: string]: string;
        }[];
        values?: {
            [key: string]: string;
        }[];
    };
}
export declare class PluralhitApi {
    private readonly CHANNEL_EMAILS;
    private hostUrl;
    constructor(hostUrl?: string);
    send(em: EmailMessage): Promise<void>;
}
