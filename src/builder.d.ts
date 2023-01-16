declare class Builder {
    constructor(contentType: string, options?: object);
    build(): string;
    setContent(content: string | Uint8Array);
    setHeader(name: string, value: string);
    appendChild(node: Builder);
}
export default Builder;