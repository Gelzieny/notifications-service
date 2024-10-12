import { Content } from "./content";

describe('Notification content', () => {
    it('should be able to create a notification content', () => {
        const content = new Content('Você recebeu uma solicitação de amizade')

        expect(content).toBeTruthy();
    });

    it('should be able to create a notification content with less than 5 charactres', () => {
        expect(() => new Content('Vik')).toThrow();
    });

    it('should be able to create a notification content with with more than 240 charactres', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    });
})
