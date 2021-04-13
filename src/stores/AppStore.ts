import { IAction, IInjectedStoreOptions, IStore, Store } from "rfluxx";
import text_content, { LocalizedTextContent, TextOptionsAndContent } from "../static/text_content";

/**
 * Options passed to the store.
 */
export interface IAppStoreOptions extends IInjectedStoreOptions {
}

/**
 * State managed by the store.
 */
export interface IAppStoreState {
    /**
     * Language of the content displayed.
     */
    language: string;

    /**
     * Text content to be displayed.
     */
    text_content: TextOptionsAndContent;

    /**
     * Localized text content to be displayed.
     */
    localized_text_content: LocalizedTextContent;

    /**
     * Indicates whether dark mode is active.
     */
    darkMode: boolean;
}

/**
 * Interface for accessing @see AppStore actions. 
 */
export interface IAppStore extends IStore<IAppStoreState> {
    /**
     * Sets the language of content displayed.
     */
    setLanguage: IAction<string>;

    /**
     * Toggles dark mode.
     */
    toggleDarkMode: IAction<boolean>;
}


/**
 * Store managing the state of the app.
 */
export class AppStore extends Store<IAppStoreState> implements IAppStore {
    /**
     * @inheritdoc
     */
    public readonly setLanguage: IAction<string>;

    /**
     * @inheritdoc
     */
    public readonly toggleDarkMode: IAction<boolean>;


    constructor(options: IAppStoreOptions) {
        super({
            ...options,
            initialState: {
                language: "DE",
                text_content,
                localized_text_content: {},
                darkMode: true
            }
        });

        this.init();
        this.setLanguage = this.createActionAndSubscribe(x => this.onSetLanguage(x));
        this.toggleDarkMode = this.createActionAndSubscribe(x => this.onToggleDarkMode(x));
    }

    private init() {
        const localized_text_content = this.state.text_content!.content!.find(ltc => ltc.locale && ltc.locale === this.state.language)!.content;
        this.setState({
            ...this.state,
            localized_text_content
        });
    }

    private onSetLanguage(language: string) {
        const localized_text_content = this.state.text_content!.content!.find(ltc => ltc.locale && ltc.locale === language)!.content;
        this.setState({
            ...this.state,
            language,
            localized_text_content
        });
    }

    private onToggleDarkMode(darkMode: boolean) {
        this.setState({
            ...this.state,
            darkMode
        });
    }
}