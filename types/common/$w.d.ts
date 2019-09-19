declare namespace $w {
    type dataset = wix_dataset.Dataset;

    type router_dataset = wix_dataset.DynamicDataset;

    /**
     * A post page for a specific blog post.
     */
    interface PostPage extends $w.Element, $w.HiddenCollapsedMixin{
        /**
         * Gets the all the information associated with the current blog post.
         */
        getPost(): Promise<$w.PostPage.BlogPost>;
    }

    namespace PostPage {
        /**
         * An object representing a blog post on a post page.
         */
        type BlogPost = {
            /**
             * Post ID.
             */
            _id: string;
            /**
             * Post title.
             */
            title: string;
            /**
             * Text of the post.
             */
            plainContent: string;
            /**
             * Date the post was originally published.
             */
            publishedDate: Date;
            /**
             * Number of times the post was viewed.
             */
            viewCount: number;
            /**
             * Number of likes the post received.
             */
            likeCount: number;
            /**
             * Number of comments the post received.
             */
            commentCount: number;
            /**
             * Date the post was most recently published.
             */
            lastPublishedDate: Date;
            /**
             * Indicates whether the cover image is displayed in the post.
             */
            coverImageDisplayed: boolean;
            /**
             * Estimated time in minutes required to read the post.
             */
            timeToRead: number;
            /**
             * Indicates whether the post was pinned to the top of the blog feed.
             */
            pinned: boolean;
            /**
             * Indicates whether the post is set as featured in the post settings. Featured posts appear in custom blog feeds.
             */
            featured: boolean;
            /**
             * List of all hashtags in the post.
             */
            hashtags: string[];
            /**
             * The post's cover [image]($w.Image.html#src).
             */
            coverImage: string;
            /**
             * Relative URL of the post page on your published site.
             */
            postPageUrl: string;
            /**
             * A few lines of text that appear in the blog feed. Defined in Post Settings or default of first 160 characters of the post.
             */
            excerpt: string;
        };

    }

    /**
     * The menu in a user profile.
     */
    interface AccountNavBar extends $w.Element, $w.HiddenCollapsedMixin{
    }

    /**
     * Anchors
     *  are invisible position markers which you can place anywhere on your site.
     *  They are a useful way to direct users to important sections.
     */
    interface Anchor extends $w.Node, $w.ViewportMixin{
        /**
         * Gets the name of an anchor.
         */
        readonly name: string;
    }

    /**
     * Provides functionality for background images in certain elements.
     */
    interface Background {
        /**
         * Gets an object containing information about the element's background.
         */
        readonly background: $w.Background.BackgroundOptions;
    }

    namespace Background {
        /**
         * An object used by the `background` property that contains the background options.
         */
        type BackgroundOptions = {
            /**
             * The file location of the background image or video.
             */
            src: string;
        };

    }

    /**
     * Container boxes
     *  are used to structure your site. You can attach
     *  any element to a container box and move the box around, which is a useful
     *  way to to keep elements together. Some actions performed on a box affect the
     *  elements it contains. For example, [hiding](#hide) a box also effectively
     *  hides all the elements in the box, although the values of the
     *  [hidden](#hidden) properties of the elements contained in the box do not change.
     */
    interface Box extends $w.Element, $w.HiddenCollapsedMixin, $w.ClickableMixin, $w.ContainableMixin, $w.StyleMixin{
        /**
         * Gets an object containing information about the box's styles.
         */
        readonly style: $w.Style;
    }

    /**
     * A text button or an icon button.
     */
    interface Button extends $w.Element, $w.HiddenCollapsedMixin, $w.DisabledMixin, $w.LinkableMixin, $w.ClickableMixin, $w.StyleMixin, $w.LabelMixin{
        /**
         * Sets or gets the label of a text button.
         */
        label: string;
        /**
         * Gets an object containing information about the button's styles.
         */
        readonly style: $w.Style;
    }

    /**
     * Checkboxes are used for a single binary choice.
     */
    interface Checkbox extends $w.FormElement, $w.DisabledMixin, $w.HiddenCollapsedMixin, $w.FocusMixin, $w.ClickableMixin, $w.StyleMixin, $w.RequiredMixin, $w.CheckedMixin{
        /**
         * Sets or gets whether a checkbox is checked.
         */
        checked: boolean;
        /**
         * Determines if a checkbox is required to be checked.
         */
        required: boolean;
        /**
         * Gets an object containing information about the checkbox's styles.
         */
        readonly style: $w.Style;
        /**
         * Sets or gets a checkbox's value.
         */
        value: string;
    }

    /**
     * Checkbox groups are used for selecting any number of the given
     *  options. Checkbox groups consist of a list of [options](#Option). Each
     *  [option](#Option) contains a label, which is what the user sees, and a
     *  value, which is what is used in code and stored in you collections.
     */
    interface CheckboxGroup extends $w.FormElement, $w.HiddenCollapsedMixin, $w.DisabledMixin, $w.FocusMixin, $w.ClickableMixin, $w.StyleMixin, $w.RequiredMixin{
        /**
         * Sets or gets the options of a checkbox group.
         */
        options: $w.CheckboxGroup.Option[];
        /**
         * Sets or gets the indices of the selected options.
         */
        selectedIndices: number[];
        /**
         * Gets an object containing information about the checkbox group's styles.
         */
        readonly style: $w.Style;
        /**
         * Sets or gets the value of the selected options.
         */
        value: string[];
    }

    namespace CheckboxGroup {
        /**
         * An object used by the `options` property that contains the attributes of checkbox item.
         */
        type Option = {
            /**
             * The value of the checkbox option. This is what you use in code and is what is stored in your collections.
             */
            value: string;
            /**
             * The label of the checkbox option. This is what a user sees.
             */
            label?: string;
        };

    }

    interface CheckedMixin {
        /**
         * Sets or gets whether the element is checked or not.
         */
        checked: boolean;
    }

    interface ClickableMixin {
        /**
         * Adds an event handler that runs when the element is clicked.
         */
        onClick(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element is double-clicked.
         */
        onDblClick(handler: $w.MouseEventHandler): $w.Element;
    }

    /**
     * Provides functionality for elements that can be collapsed.
     *
     *  To learn about the behavior of a collapsed element,
     *  see the [`collapsed`](#collapsed) property.
     */
    interface CollapsedMixin {
        /**
         * Indicates if the element is collapsed or expanded.
         */
        readonly collapsed: boolean;
        /**
         * Collapses the element and sets its `collapsed` property to `true`.
         */
        collapse(): Promise<void>;
        /**
         * Expands the element and sets its `collapsed` property to `false`.
         */
        expand(): Promise<void>;
    }

    /**
     * A `Column` is a component part of a `ColumnStrip`.
     */
    interface Column extends $w.Element, $w.HiddenCollapsedMixin, $w.Background, $w.ClickableMixin, $w.ContainableMixin{
    }

    /**
     * A `ColumnStrip` is a strip of `Column` elements.
     */
    interface ColumnStrip extends $w.Element, $w.Background, $w.HiddenCollapsedMixin, $w.ClickableMixin, $w.ContainableMixin{
        /**
         * Gets an object containing information about the column strip's background, such as its image or video source.
         */
        readonly background: $w.Document.BackgroundOptions;
        /**
         * Gets a list of all the columns contained in the column strip.
         */
        readonly columns: $w.Column[];
    }

    /**
     * Provides functionality for elements that can contain other elements.
     *  Some elements, such as pages, headers, footers, and boxes, can contain
     *  other elements. This occurs when you drag an element onto a container
     *  element and attach it.
     *  These attached elements are considered the parent element's children. Some
     *  actions performed on the parent, such as [`hiding`]($w.HiddenMixin.html#hide),
     *  affect the element's children as well.
     */
    interface ContainableMixin {
        /**
         * Gets an array of the elements that are contained within the element.
         */
        readonly children: $w.Element[];
    }

    /**
     * A container for Repeater items.
     */
    interface Container extends $w.Element, $w.HiddenCollapsedMixin, $w.Background, $w.ClickableMixin, $w.ContainableMixin{
    }

    /**
     * A `DatePicker` is used for entering dates. It lets users populate a
     *  date field by picking a date using a calendar popup.
     */
    interface DatePicker extends $w.FormElement, $w.HiddenCollapsedMixin, $w.DisabledMixin, $w.FocusMixin, $w.ReadOnlyMixin, $w.ClickableMixin, $w.RequiredMixin{
        /**
         * Sets or gets the dates that a user cannot select.
         */
        disabledDates: Date[];
        /**
         * Sets or gets the days of the week that a user cannot select.
         */
        disabledDaysOfWeek: number[];
        /**
         * Sets or gets the latest date that a user can select.
         */
        maxDate: Date;
        /**
         * Sets or gets the earliest date that a user can select.
         */
        minDate: Date;
        /**
         * Sets or gets the value of the date picker.
         */
        value: Date;
    }

    interface DisabledMixin {
        /**
         * Indicates if the element is enabled or disabled.
         */
        readonly enabled: boolean;
        /**
         * Disables the element and sets its `enabled` property to `false`.
         */
        disable(): Promise<void>;
        /**
         * Enables the element and sets its `enabled` property to `true`.
         */
        enable(): Promise<void>;
    }

    /**
     * A complete web page, which consists of a Header, Page, and Footer.
     */
    interface Document {
        /**
         * Gets an object containing information about the document's background, such as its image or video source.
         */
        readonly background: $w.Document.BackgroundOptions;
        /**
         * Gets the document's Header, Page, and Footer.
         */
        readonly children: $w.Node[];
        /**
         * Gets the document's type.
         */
        readonly type: string;
    }

    namespace Document {
        /**
         * An object used by the `background` property that contains the background options.
         */
        type BackgroundOptions = {
            /**
             * The file location of the background image.
             */
            src: string;
        };

    }

    /**
     * Dropdowns are used for selecting one of a number of options.
     *  They are especially useful when there are too many options to display using
     *  [radio buttons]($w.RadioButtonGroup.html). Dropdowns consist of a list
     *  of [options](#Option). Each [option](#Option) contains a label, which is
     *  what the user sees, and a value, which is what is used in code and stored in
     *  you collections.
     */
    interface Dropdown extends $w.FormElement, $w.HiddenCollapsedMixin, $w.DisabledMixin, $w.FocusMixin, $w.ClickableMixin, $w.StyleMixin, $w.RequiredMixin{
        /**
         * Sets or gets the options in a dropdown.
         */
        options: $w.Dropdown.Option[];
        /**
         * Sets or gets the dropdown's placeholder text.
         */
        placeholder: string;
        /**
         * Sets or gets the index of the selected option.
         */
        selectedIndex: number;
        /**
         * Gets an object containing information about the dropdown's styles.
         */
        readonly style: $w.Style;
        /**
         * Sets or gets an element's value.
         */
        value: string;
    }

    namespace Dropdown {
        /**
         * An object used by the `options` property that contains the attributes of a dropdown list item.
         */
        type Option = {
            /**
             * The value of the dropdown option. This is what you use in code and is what is stored in your collections.
             */
            value: string;
            /**
             * The label of the dropdown option. This is what a user sees.
             */
            label?: string;
        };

    }

    /**
     * The Rendering API is used to control when code is run as a page is being loaded.
     */
    interface EffectOptions {
    }

    namespace EffectOptions {
        /**
         * An object used to customize the `"arc"` effect.
         */
        type ArcEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
        };

        /**
         * An object used to customize the `"bounce"` effect.
         */
        type BounceEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
            intensity: string;
        };

        /**
         * An object used to customize the `"fade"` effect.
         */
        type FadeEffectOptions = {
            duration: number;
            delay: number;
        };

        /**
         * An object used to customize the `"flip"` effect.
         */
        type FlipEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
        };

        /**
         * An object used to customize the `"float"` effect.
         */
        type FloatEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
        };

        /**
         * An object used to customize the `"fly"` effect.
         */
        type FlyEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
        };

        /**
         * An object used to customize the `"fold"` effect.
         */
        type FoldEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
        };

        /**
         * An object used to customize the `"glide"` effect.
         */
        type GlideEffectOptions = {
            duration: number;
            delay: number;
            angle: number;
            distance: number;
        };

        /**
         * An object used to customize the `"puff"` effect.
         */
        type PuffEffectOptions = {
            duration: number;
            delay: number;
        };

        /**
         * An object used to customize the `"roll"` effect.
         */
        type RollEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
        };

        /**
         * An object used to customize the `"slide"` effect.
         */
        type SlideEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
        };

        /**
         * An object used to customize the `"spin"` effect.
         */
        type SpinEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
            cycles: number;
        };

        /**
         * An object used to customize the `"turn"` effect.
         */
        type TurnEffectOptions = {
            duration: number;
            delay: number;
            direction: string;
        };

        /**
         * An object used to customize the `"zoom"` effect.
         */
        type ZoomEffectOptions = {
            duration: number;
            delay: number;
        };

    }

    /**
     * Provides basic functionality for elements.
     */
    interface Element extends $w.Node, $w.ViewportMixin{
        /**
         * Indicates if an element is currently displayed.
         */
        readonly rendered: boolean;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         *  onto the element.
         */
        onMouseIn(handler: $w.MouseEventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the mouse pointer is moved
         *  off of the element.
         */
        onMouseOut(handler: $w.MouseEventHandler): $w.Element;
    }

    /**
     * Events are fired when certain actions occur to elements.
     */
    interface Event {
        /**
         * Gets the context of the event on a repeated element.
         */
        readonly context: $w.Event.EventContext;
        /**
         * Gets the element that the event was fired on.
         */
        readonly target: $w.Element;
        /**
         * Gets the type of event that was fired.
         */
        readonly type: string;
    }

    namespace Event {
        /**
         * An object that contains information about the context in which an event was fired.
         */
        type EventContext = {
            /**
             * `"GLOBAL_SCOPE"` for events fired outside
             *  of repeaters, or `"COMPONENT_SCOPE"` for events fired from repeaters.
             */
            type: string;
            /**
             * ID of the repeater item where the
             *  event was fired from.
             */
            itemId: string;
        };

    }

    /**
     * Provides functionality for elements that can set and lose focus.
     *
     *  The element on the page that is currently active is the element in focus.
     *  Only one element on the page can have focus at any given moment.
     *  Typically, an element exhibits a visual cue, such as a subtle outline,
     *  indicating that it is in focus. The element in focus receives keystroke
     *  events if the user causes any.
     *
     *  An element receives focus and loses focus (blurs) through user actions,
     *  such as clicking and tabbing, or programmatically, using the
     *  [focus( )](#focus) and [blur( )](#blur) functions.
     */
    interface FocusMixin {
        /**
         * Removes focus from the element.
         */
        blur(): void;
        /**
         * Places focus on the element.
         */
        focus(): void;
        /**
         * Adds an event handler that runs when the element loses focus.
         */
        onBlur(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when the element receives focus.
         */
        onFocus(handler: $w.EventHandler): $w.Element;
    }

    /**
     * The footer is the area of your site that appears at the bottom and
     *  throughout all of your pages.
     */
    interface Footer extends $w.Element, $w.ClickableMixin, $w.ContainableMixin, $w.StyleMixin{
        /**
         * Gets an object containing information about the footer's styles.
         */
        readonly style: $w.Style;
    }

    /**
     * Provides functionality related to user input elements.
     */
    interface FormElement extends $w.Element, $w.ValidatableMixin, $w.ValueMixin{
    }

    /**
     * A gallery for displaying multiple items.
     */
    interface Gallery extends $w.Element, $w.HiddenCollapsedMixin, $w.PlayableMixin{
        /**
         * Sets or gets the action that occurs when an item in the gallery is clicked.
         */
        clickAction: string;
        /**
         * Gets the index of the gallery's current item.
         */
        readonly currentIndex: number;
        /**
         * Gets an object containing information about the current item.
         */
        readonly currentItem: $w.Gallery.ImageItem | $w.Gallery.VideoItem;
        /**
         * Gets an object containing information about the gallery's capabilities.
         */
        readonly galleryCapabilities: $w.Gallery.GalleryCapabilities;
        /**
         * Sets or gets the items in a gallery.
         */
        items: $w.Gallery.ImageItem[] | $w.Gallery.VideoItem[];
        /**
         * Determines if a gallery's navigation arrows are shown.
         */
        showNavigationButtons: boolean;
        /**
         * Adds an event handler that runs when a gallery's current item changes.
         */
        onCurrentItemChanged(handler: $w.GalleryItemChangedEventHandler): $w.Gallery;
        /**
         * Adds an event handler that runs when an item in a gallery is
         *  clicked.
         */
        onItemClicked(handler: $w.GalleryItemClickedEventHandler): $w.Gallery;
    }

    namespace Gallery {
        /**
         * An object used by the `galleryCapabilities` property that contains the capabilities of a gallery.
         */
        type GalleryCapabilities = {
            /**
             * Indicates if the gallery supports play operations.
             */
            isPlayable: boolean;
            /**
             * Indicates if the gallery supports the notion of a current item.
             */
            hasCurrentItem: boolean;
            /**
             * Indicates if the gallery supports navigation buttons.
             */
            hasNavigationButtons: boolean;
        };

        /**
         * An object used by the Gallery properties `items` and `currentItem` to represent a single gallery image.
         */
        type ImageItem = {
            /**
             * Item type. Value is `"image"`.
             */
            type: string;
            /**
             * Item slug.
             */
            slug: string;
            /**
             * Image source URL.
             */
            src: string;
            /**
             * Image description. Descriptions over 100 characters are truncated.
             */
            description?: string;
            /**
             * Image title.
             */
            title?: string;
            /**
             * URL of the image's clickable link. See [here]($w.LinkableMixin.html#link) for more information about links.
             */
            link?: string;
        };

        /**
         * An object used by the Gallery properties `items` and `currentItem` to represent a single gallery video.
         */
        type VideoItem = {
            /**
             * Item type. Value is `"video"`.
             */
            type: string;
            /**
             * Item slug.
             */
            slug: string;
            /**
             * Video source URL.
             */
            src: string;
            /**
             * Video description. Descriptions over 100 characters are truncated.
             */
            description?: string;
            /**
             * Video title.
             */
            title?: string;
            /**
             * URL of the video's clickable link. See [here]($w.LinkableMixin.html#link) for more information about links.
             */
            link?: string;
            /**
             * Video thumbnail URL.
             */
            thumbnail?: string;
        };

    }

    /**
     * Event that is fired when a gallery moves to a new image.
     */
    interface GalleryItemChangedEvent extends $w.Event{
        /**
         * Gets the gallery item.
         */
        readonly item: $w.Gallery.ImageItem | $w.Gallery.VideoItem;
        /**
         * Gets the gallery item's index.
         */
        readonly itemIndex: number;
    }

    /**
     * Event that is fired when an image in a gallery is clicked.
     */
    interface GalleryItemClickedEvent extends $w.GalleryItemChangedEvent, $w.Event{
    }

    /**
     * A [Google Map element](https://www.wix.com/support/html5/article/adding-google-maps)
     *  that allows you to display a given location.
     */
    interface GoogleMap extends $w.Element, $w.HiddenCollapsedMixin{
        /**
         * Sets or gets the location information of a map's marked location.
         */
        location: $w.GoogleMap.MapLocation;
    }

    namespace GoogleMap {
        /**
         * An object used by the `location` property that
         *  contains the attributes of a marked map location.
         */
        type MapLocation = {
            /**
             * The latitude of the location. Must be between -90 and 90.
             */
            latitude: number;
            /**
             * The longitude of the location. Must be between -180 and 180.
             */
            longitude: number;
            /**
             * The description of the location.
             */
            description?: string;
        };

    }

    /**
     * The header is the area of your site that appears at the top and
     *  throughout all of your pages.
     */
    interface Header extends $w.Element, $w.ClickableMixin, $w.ContainableMixin, $w.StyleMixin{
        /**
         * Gets an object containing information about the header's styles.
         */
        readonly style: $w.Style;
    }

    /**
     * Provides functionality for all elements that can be hidden or collapsed.
     */
    interface HiddenCollapsedElement extends $w.Element, $w.HiddenCollapsedMixin{
    }

    /**
     * Provides functionality for all elements that can be hidden or collapsed.
     */
    interface HiddenCollapsedMixin extends $w.HiddenMixin, $w.CollapsedMixin{
    }

    /**
     * Provides functionality for elements that can be hidden.
     *
     *  To learn about the behavior of a hidden element,
     *  see the [`hidden`](#hidden) property.
     */
    interface HiddenMixin {
        /**
         * Indicates if the element is visible or hidden.
         */
        readonly hidden: boolean;
        /**
         * Indicates if the element is actually visible.
         */
        readonly isVisible: boolean;
        /**
         * Hides the element and sets its `hidden` property
         *  to `true`, using an effect if specified.
         */
        hide(effectName?: string, effectOptions?: $w.EffectOptions.ArcEffectOptions | $w.EffectOptions.BounceEffectOptions | $w.EffectOptions.FadeEffectOptions | $w.EffectOptions.FlipEffectOptions | $w.EffectOptions.FloatEffectOptions | $w.EffectOptions.FlyEffectOptions | $w.EffectOptions.FoldEffectOptions | $w.EffectOptions.GlideEffectOptions | $w.EffectOptions.PuffEffectOptions | $w.EffectOptions.RollEffectOptions | $w.EffectOptions.SlideEffectOptions | $w.EffectOptions.SpinEffectOptions | $w.EffectOptions.TurnEffectOptions | $w.EffectOptions.ZoomEffectOptions): Promise<void>;
        /**
         * Shows the element and sets its `hidden` property
         *  to `false`, using an effect if specified.
         */
        show(effectName?: string, effectOptions?: $w.EffectOptions.ArcEffectOptions | $w.EffectOptions.BounceEffectOptions | $w.EffectOptions.FadeEffectOptions | $w.EffectOptions.FlipEffectOptions | $w.EffectOptions.FloatEffectOptions | $w.EffectOptions.FlyEffectOptions | $w.EffectOptions.FoldEffectOptions | $w.EffectOptions.GlideEffectOptions | $w.EffectOptions.PuffEffectOptions | $w.EffectOptions.RollEffectOptions | $w.EffectOptions.SlideEffectOptions | $w.EffectOptions.SpinEffectOptions | $w.EffectOptions.TurnEffectOptions | $w.EffectOptions.ZoomEffectOptions): Promise<void>;
    }

    /**
     * A container for internal or external HTML code. Messages can be sent
     *  from your page code to the code in an HTML component and from the HTML
     *  component to your page code using the [`postMessage()`](#postMessage) and
     *  [`onMessage()`](#onMessage) functions. To learn more about what code an HTML
     *  component can hold, see here.
     *
     *  For an overview of working with an HTML Component using code, see Working with the HTML Element.
     */
    interface HtmlComponent extends $w.IFrame{
        /**
         * Sets or gets whether the HTML Component displays scrollbars.
         */
        scrolling: string;
        /**
         * Sets or gets the URL of the HTML Component's code.
         */
        src: string;
        /**
         * Allows the HTML Component to be put into full screen mode.
         */
        allowFullScreen(): $w.HtmlComponent;
        /**
         * Adds an event handler that runs when the HTML Component
         *  sends a message.
         */
        onMessage(handler: $w.HtmlComponentMessageEventHandler): $w.HtmlComponent;
        /**
         * Sends a message to the HTML Component.
         */
        postMessage(message: string | number | boolean | any | any[]): void;
    }

    /**
     * Event that is fired when the code in an HtmlComponent sends a message.
     */
    interface HtmlComponentMessageEvent extends $w.Event{
        /**
         * Gets the event data.
         */
        readonly data: $w.Element;
    }

    /**
     * Provides functionality for iframe-based elements, such as `HtmlComponent`.
     */
    interface IFrame extends $w.Element, $w.HiddenCollapsedMixin{
    }

    /**
     * Event that is fired when a user hovers over a star on a ratings input component.
     */
    interface IconMouseInEvent extends $w.Event{
        /**
         * Gets the display label that corresponds to the icon that the mouse entered.
         */
        readonly label: string;
        /**
         * Gets the value (1-5) that corresponds to the icon that the mouse entered.
         */
        readonly value: number;
    }

    /**
     * Images are images stored in the Media Manager
     *  or retrieved from an external web location.
     *
     *  The URL formats for images are:
     *
     *  + Images from the Media Manager: `wix:image://v1//#originWidth=&originHeight=[&watermark=]`
     *  + Images from the web: `http(s)://`
     */
    interface Image extends $w.Element, $w.HiddenCollapsedMixin, $w.LinkableMixin, $w.ClickableMixin{
        /**
         * Sets or gets an image's alt text.
         */
        alt: string;
        /**
         * Sets or gets the action that occurs when an image is clicked.
         */
        clickAction: string;
        /**
         * Sets or gets the file location of the image.
         */
        src: string;
        /**
         * Sets or gets an image's tooltip.
         */
        tooltip: string;
    }

    /**
     * Event that is fired when the keyboard is pressed.
     */
    interface KeyboardEvent extends $w.Event{
        /**
         * Indicates if the Option key on a Mac or Alt key on a PC was pressed.
         */
        readonly altKey: boolean;
        /**
         * Indicates if the Control (Ctrl) key was pressed.
         */
        readonly ctrlKey: boolean;
        /**
         * Gets a string representation of the key that was pressed.
         */
        readonly key: string;
        /**
         * Indicates if the ⌘ Command key on a Mac or ⊞ Windows key on a PC
         *  was pressed.
         */
        readonly metaKey: boolean;
        /**
         * Indicates if the Shift key was pressed.
         */
        readonly shiftKey: boolean;
    }

    interface LabelMixin {
        /**
         * Sets or gets the label of an element.
         */
        label: string;
    }

    /**
     * Provides functionality for elements that can acts as links.
     */
    interface LinkableMixin {
        /**
         * Sets or gets the element's link.
         */
        link: string;
        /**
         * Sets or gets the target of the element's link.
         */
        target: string;
    }

    /**
     * A container for media items.
     */
    interface MediaBox extends $w.Element, $w.HiddenCollapsedMixin, $w.Background{
    }

    /**
     * A menu container is a container that holds the elements in a
     *  mobile menu. You can add and remove elements to the container to customize
     *  your site's mobile menu. The menu only appears in the mobile version of your
     *  site.
     */
    interface MenuContainer extends $w.Element{
        /**
         * Closes a mobile menu.
         */
        close(): Promise<void>;
        /**
         * Opens a mobile menu.
         */
        open(): Promise<void>;
    }

    /**
     * Event that is fired when the mouse is clicked.
     */
    interface MouseEvent extends $w.Event{
        /**
         * Gets the distance in pixels between the mouse pointer and the
         *  left edge of the browser's viewable area.
         */
        readonly clientX: number;
        /**
         * Gets the distance in pixels between the mouse pointer and the
         *  top edge of the browser's viewable area.
         */
        readonly clientY: number;
        /**
         * Gets the distance in pixels between the mouse pointer and the
         *  left edge of the element that triggered this event.
         */
        readonly offsetX: number;
        /**
         * Gets the distance in pixels between the mouse pointer and the
         *  top edge of the element that triggered this event.
         */
        readonly offsetY: number;
        /**
         * Gets the distance in pixels between the mouse pointer and the
         *  left edge of the page.
         */
        readonly pageX: number;
        /**
         * Gets the distance in pixels between the mouse pointer and the
         *  top edge of the page.
         */
        readonly pageY: number;
        /**
         * Gets the distance in pixels between the mouse pointer and the
         *  left edge of the screen or screens.
         */
        readonly screenX: number;
        /**
         * Gets the distance in pixels between the mouse pointer and the
         *  top edge of the screen or screens.
         */
        readonly screenY: number;
    }

    /**
     * Provides basic functionality for all Wix objects, including objects
     *  that are not [elements]($w.Element.html).
     */
    interface Node {
        /**
         * Indicates if an element appears on all pages or only on the current page.
         */
        readonly global: boolean;
        /**
         * Gets the element's ID.
         */
        readonly id: string;
        /**
         * Gets the element's parent element.
         */
        readonly parent: $w.Node;
        /**
         * Gets the element's type.
         */
        readonly type: string;
        /**
         * Scrolls the page to the element using an animation.
         */
        scrollTo(): Promise<void>;
    }

    /**
     * A page is a web page that can contain other elements.
     */
    interface Page extends $w.Element, $w.ClickableMixin, $w.ContainableMixin{
        /**
         * Gets the page's SEO description.
         */
        readonly description: string;
        /**
         * Gets the page's keywords.
         */
        readonly keywords: string[];
        /**
         * Gets the page's title.
         */
        readonly title: string;
        /**
         * Indicates if the page is included in the site's menu.
         */
        readonly visibleInMenu: boolean;
    }

    /**
     * Provides functionality for elements that can be played.
     */
    interface PlayableMixin {
        /**
         * Indicates if the element is currently playing.
         */
        readonly isPlaying: boolean;
        /**
         * Moves to the next item.
         */
        next(): Promise<$w.Element>;
        /**
         * Adds an event handler that runs when playback is paused.
         */
        onPause(handler: $w.EventHandler): $w.Gallery & $w.Slideshow;
        /**
         * Adds an event handler that runs when playback is started or restarted.
         */
        onPlay(handler: $w.EventHandler): $w.Gallery & $w.Slideshow;
        /**
         * Pauses playback.
         */
        pause(): void;
        /**
         * Begins or resumes playback.
         */
        play(): void;
        /**
         * Moves to the previous image or slide.
         */
        previous(): Promise<$w.Element>;
    }

    /**
     * A [quick action bar](https://support.wix.com/en/article/adding-and-setting-up-the-quick-action-bar-on-your-mobile-site)
     *  helps your visitors contact you instantly from their mobile devices. You can
     *  choose which actions appear on it and customize the design to match your site.
     */
    interface QuickActionBar extends $w.HiddenCollapsedMixin, $w.StyleMixin{
        /**
         * Sets or gets a quick action bar's alignment.
         */
        alignment: boolean;
        /**
         * Sets or gets a quick action bar's color scheme.
         */
        colorScheme: string;
        /**
         * Sets or gets whether a quick action bar's color scheme is inverted.
         */
        invertColorScheme: boolean;
        /**
         * Sets or gets whether a quick action bar's labels are shown.
         */
        showLabels: boolean;
        /**
         * Adds an event handler that runs when an item in a quick action bar is
         *  clicked.
         */
        onItemClicked(handler: $w.QuickActionBarItemClickedEventHandler): $w.QuickActionBar;
    }

    /**
     * Event that is fired when a quick action bar item is clicked.
     */
    interface QuickActionBarItemClickedEvent extends $w.Event{
        /**
         * Gets the gallery item.
         */
        readonly item: $w.QuickActionBarItemClickedEvent.QuickActionBarItem;
        /**
         * Gets the quick action bar item's index.
         */
        readonly itemIndex: number;
    }

    namespace QuickActionBarItemClickedEvent {
        /**
         * An object representing a quick action bar item.
         */
        type QuickActionBarItem = {
            /**
             * The quick action bar item type.
             */
            itemType: string;
            /**
             * The quick action bar item label.
             */
            label: string;
            /**
             * The quick action bar item link.
             */
            link: string;
        };

    }

    /**
     * Radio button groups are used for selecting one of a number of
     *  options. Radio button groups consist of a list of [options](#Option). Each
     *  [option](#Option) contains a label, which is what the user sees, and a
     *  value, which is what is used in code and stored in you collections.
     */
    interface RadioButtonGroup extends $w.FormElement, $w.HiddenCollapsedMixin, $w.DisabledMixin, $w.FocusMixin, $w.ClickableMixin, $w.StyleMixin, $w.RequiredMixin{
        /**
         * Sets or gets the options in a radio button group.
         */
        options: $w.RadioButtonGroup.Option[];
        /**
         * Sets or gets the index of the selected option.
         */
        selectedIndex: number;
        /**
         * Gets an object containing information about the radio button group's styles.
         */
        readonly style: $w.Style;
        /**
         * Sets or gets the value of the selected option.
         */
        value: string;
    }

    namespace RadioButtonGroup {
        /**
         * An object used by the `options` property that contains the attributes of a radio button item.
         */
        type Option = {
            /**
             * The value of the radio button option. This is what you use in code and is what is stored in your collections.
             */
            value: string;
            /**
             * The label of the radio button option. This is what a user sees.
             */
            label?: string;
        };

    }

    /**
     * Provides functionality for input elements which support readonly mode.
     */
    interface ReadOnlyMixin {
        /**
         * Sets or gets if a user can modify the value of the input element.
         */
        readOnly: boolean;
    }

    /**
     * A repeating layout.
     */
    interface Repeater extends $w.Element, $w.HiddenCollapsedMixin{
        /**
         * Sets or gets the repeater data.
         */
        data: any[];
        /**
         * Runs a function for each repeated item.
         */
        forEachItem(callback: $w.ForItemCallback): void;
        /**
         * Runs a function for each repeated item with the given IDs.
         */
        forItems(itemIds: string[], callback: $w.ForItemCallback): void;
        /**
         * Sets the function that runs when a new repeated item is created.
         */
        onItemReady(handler: $w.ItemReadyEventHandler): $w.Repeater;
        /**
         * Sets the function that runs when a repeated item is removed.
         */
        onItemRemoved(handler: $w.ItemRemovedEventHandler): $w.Repeater;
    }

    /**
     * Provides functionality for input elements can be required to have a value.
     */
    interface RequiredMixin {
        /**
         * Sets or gets whether an input element is required to have a value.
         */
        required: boolean;
    }

    /**
     * A `Slide` from a `Slideshow` that can contain other elements.
     */
    interface Slide extends $w.Element, $w.Background, $w.ContainableMixin{
        /**
         * Gets the slide's ID.
         */
        readonly id: string;
        /**
         * Gets the name of the slide.
         */
        readonly name: string;
    }

    /**
     * Slideshows are playable containers for slides.
     */
    interface Slideshow extends $w.Element, $w.HiddenCollapsedMixin, $w.PlayableMixin, $w.ClickableMixin, $w.ContainableMixin{
        /**
         * Gets the index of the slideshow's current slide.
         */
        readonly currentIndex: number;
        /**
         * Gets the slideshow's current slide.
         */
        readonly currentSlide: $w.Slide;
        /**
         * Sets or gets whether a slideshow's navigation buttons are shown.
         */
        showNavigationButtons: boolean;
        /**
         * Set or returns whether a slideshow's slide buttons are shown.
         */
        showSlideButtons: boolean;
        /**
         * Gets a list of all the slides contained in the slideshow.
         */
        readonly slides: $w.Slide[];
        /**
         * Change the slideshow's current slide to a specific slide or index.
         */
        changeSlide(slideReference: number | $w.Slide): Promise<$w.Slide>;
        /**
         * Adds an event handler that runs when the slideshow moves to a new slide.
         */
        onChange(eventHandler: $w.EventHandler): $w.Slideshow;
    }

    /**
     * An object representing an element's styles.
     *
     * Elements that expose a style property can be styled programmatically.
     * You cannot programmatically style elements that do not expose a style property.
     *
     * The following elements expose the style property:
     *
     *  + [`Box`]($w.Box.html)
     *  + [`Button`]($w.Button.html)
     *  + [`Checkbox`]($w.Checkbox.html)
     *  + [`CheckboxGroup`]($w.CheckboxGroup.html)
     *  + [`Dropdown`]($w.Dropdown.html)
     *  + [`Footer`]($w.Footer.html)
     *  + [`Header`]($w.Header.html)
     *  + [`ProgressBar`]($w.ProgressBar.html)
     *  + [`QuickActionBar`]($w.QuickActionBar.html)
     *  + [`RadioButtonGroup`]($w.RadioButtonGroup.html)
     *  + [`TextBox`]($w.TextBox.html)
     *  + [`TextInput`]($w.TextInput.html)
     *  + [`UploadButton`]($w.UploadButton.html)
     */
    interface Style {
        /**
         * Sets or gets the background color of an element.
         */
        backgroundColor: string;
        /**
         * Sets or gets the border color of an element.
         */
        borderColor: string;
        /**
         * Sets or gets the border radius of an element.
         */
        borderRadius: string;
        /**
         * Sets or gets the border width of an element.
         */
        borderWidth: string;
        /**
         * Sets or gets the text color of an element.
         */
        color: string;
        /**
         * Sets or gets the foreground color of an element.
         */
        foregroundColor: string;
    }

    /**
     * Provides functionality for elements that can be styled.
     */
    interface StyleMixin {
        /**
         * Gets an object containing information about the element's styles.
         */
        readonly style: $w.Style;
    }

    /**
     * A table for displaying data.
     */
    interface Table extends $w.Element, $w.HiddenCollapsedMixin, $w.ClickableMixin{
        /**
         * Sets or gets the defining properties of the columns in a table.
         */
        columns: $w.Table.Column[];
        /**
         * Sets the function that is called when a new page of table data is to be displayed.
         */
        dataFetcher: Function;
        /**
         * Sets or gets the table's pagination options.
         */
        pagination: $w.Table.PaginationOptions;
        /**
         * Sets or gets the table's row data.
         */
        rows: any[];
        /**
         * Adds an event handler that runs when a table cell is selected.
         */
        onCellSelect(eventHandler: $w.TableCellEventHandler): $w.Table;
        /**
         * Adds an event handler that runs when the table's data is changed.
         */
        onDataChange(eventHandler: $w.EventHandler): void;
        /**
         * Adds an event handler that runs when a table row is selected.
         */
        onRowSelect(eventHandler: $w.TableRowEventHandler): $w.Table;
        /**
         * Fetches the most current data and updates the table.
         */
        refresh(): void;
        /**
         * Selects a table row by index.
         */
        selectRow(index: number): void;
        /**
         * Updates a the row data of a single row at the specified index.
         */
        updateRow(index: number, rowData: any): void;
    }

    namespace Table {
        /**
         * An object used by the `columns` property that
         *  contains the properties that define a table column. Table columns do not
         *  store any data.
         */
        type Column = {
            /**
             * The column ID.
             */
            id: string;
            /**
             * The location of the data displayed
             *  in the column.
             *
             *  When the table is populated by a connection to a dataset, the `dataPath`
             *  value is a field key from the collection that the dataset is connected to.
             *
             *  When the table is populated by using the [`rows`](#rows) or
             *  [`dataFetcher`](#dataFetcher) properties, the `dataPath` value is one of the
             *  property keys from the table's row objects.
             */
            dataPath: string;
            /**
             * The column header label.
             */
            label: string;
            /**
             * The type of data in this column: `"number"`, `"string"`, `"date"`, `"image"`, `"bool"`, or `"richText"`.
             */
            type: string;
            /**
             * The pixel width of the column.
             */
            width?: number;
            /**
             * Whether the column is visible.
             */
            visible?: boolean;
            /**
             * The location of the links used when
             *  the items in the column are clicked.
             *
             *  When the table is populated by a connection to a dataset, the `linkPath`
             *  value is a field key from the collection that the dataset is connected to.
             *  The collection field can be a [regular field](https://support.wix.com/en/article/about-database-collections#regular-fields)
             *  that contains URLs or a [calculated field](https://support.wix.com/en/article/about-database-collections#calculated-fields)
             *  that contains relative links to dynamic pages.
             *
             *  When the table is populated by using the [`rows`](#rows) or
             *  [`dataFetcher`](#dataFetcher) properties, the `linkPath` value is one of the
             *  property keys from the table's rows objects.
             *  The property values associated with that key contain URLs or relative links.
             */
            linkPath?: string;
        };

        /**
         * An object used by the `pagination` property that
         * contains the pagination options which determine if and how the table
         * is paginated.
         */
        type PaginationOptions = {
            /**
             * The type of pagination to use: `"normal"`, `"pagination"`, or `"virtual"`.
             */
            type: string;
            /**
             * The number of rows per page.
             */
            rowsPerPage: number;
        };

        /**
         * An object used by the `pagination` property that
         * contains the pagination parameters which determine if and how the table
         * is paginated.
         */
        type PaginationParam = {
            type: string;
            rowsPerPage: number;
        };

    }

    /**
     * Event that is fired when a table cell is selected.
     */
    interface TableCellEvent extends $w.Event{
        /**
         * Gets the column ID of the selected cell.
         */
        readonly cellColumnId: string;
        /**
         * Gets the data from the selected cell.
         */
        readonly cellData: string;
        /**
         * Gets the row index of the selected cell.
         */
        readonly cellRowIndex: number;
    }

    /**
     * Event that is fired when a table row is selected.
     */
    interface TableRowEvent extends $w.Event{
        /**
         * Gets the data for the selected row.
         */
        readonly rowData: any;
        /**
         * Gets the index of the selected row.
         */
        readonly rowIndex: number;
    }

    /**
     * Provides functionality for text elements.
     */
    interface Text extends $w.Element, $w.HiddenCollapsedMixin, $w.ClickableMixin{
        /**
         * Sets or gets the contents of a text element using standard HTML.
         */
        html: string;
        /**
         * Sets or gets the plain-text contents of a text element.
         */
        text: string;
    }

    /**
     * An input element for capturing large amounts of text.
     */
    interface TextBox extends $w.FormElement, $w.DisabledMixin, $w.TextInputMixin, $w.HiddenCollapsedMixin, $w.FocusMixin, $w.ReadOnlyMixin, $w.ClickableMixin, $w.StyleMixin, $w.RequiredMixin{
        /**
         * Gets an object containing information about the text box's styles.
         */
        readonly style: $w.Style;
        /**
         * Sets or gets a text input's value.
         */
        value: string;
        /**
         * Determines if the text contains line breaks when its value is read.
         */
        wrap: string;
    }

    /**
     * An input element for capturing small amounts of text.
     */
    interface TextInput extends $w.FormElement, $w.HiddenCollapsedMixin, $w.DisabledMixin, $w.TextInputMixin, $w.FocusMixin, $w.ReadOnlyMixin, $w.ClickableMixin, $w.StyleMixin, $w.RequiredMixin{
        /**
         * Sets or gets the input type of an Input element.
         */
        inputType: string;
        /**
         * Sets or gets the maximum value for a text input element whose
         *  type is set to **Number**.
         */
        max: number;
        /**
         * Sets or gets the minimum value for a text input element whose
         *  type is set to **Number**.
         */
        min: number;
        /**
         * Gets an object containing information about the text input's styles.
         */
        readonly style: $w.Style;
        /**
         * Sets or gets a text input's value.
         */
        value: string;
    }

    /**
     * Provides functionality for elements that accept text as input.
     */
    interface TextInputMixin {
        /**
         * Sets or gets the maximum number of characters that can be entered.
         */
        maxLength: number;
        /**
         * Sets or gets the element's placeholder text.
         */
        placeholder: string;
        /**
         * Adds an event handler that runs when the cursor is inside the
         *  input element and a key is pressed.
         */
        onKeyPress(eventHandler: $w.KeyboardEventHandler): $w.Element;
    }

    /**
     * An upload button enables users to upload files to your site.
     */
    interface UploadButton extends $w.FormElement, $w.HiddenCollapsedMixin, $w.DisabledMixin, $w.FocusMixin, $w.StyleMixin, $w.RequiredMixin{
        /**
         * Sets or gets the label on the upload button.
         */
        buttonLabel: string;
        /**
         * Sets or gets the type of file that a user can upload.
         */
        fileType: string;
        /**
         * Gets an object containing information about the upload button's styles.
         */
        readonly style: $w.Style;
        /**
         * Returns a list of files that are pending upload.
         */
        value: $w.UploadButton.File[];
        /**
         * Clears the files that are pending upload.
         */
        reset(): void;
        /**
         * Uploads the files that the user has chosen.
         */
        startUpload(): Promise<$w.UploadButton.UploadedFile>;
    }

    namespace UploadButton {
        /**
         * The object used by the `value` property that represents
         *  files ready for upload.
         */
        type File = {
            /**
             * The file's name.
             */
            name: string;
            /**
             * The file's size in bytes.
             */
            size: string;
        };

        /**
         * The object returned by the `startUpload()` function's
         *  Promise when an upload fails.
         */
        type UploadError = {
            /**
             * Numeric The error's code.
             */
            errorCode: string;
            /**
             * The error's description.
             */
            errorDescription: string;
        };

        /**
         * The object returned by the `startUpload()` function's
         *  Promise that contains the URL of the successfully uploaded file.
         */
        type UploadedFile = {
            /**
             * The Wix URL of the uploaded file.
             */
            url: string;
        };

    }

    /**
     * Provides functionality for elements that can be validated.
     *
     * Certain input elements contain properties that are used in basic form
     * validation, such as [`required`]($w.RequiredMixin.html#required) and
     * [`maxlength`]($w.TextInputMixin.html#maxlength). More complex validation
     * logic is achieved using the properties and functions below.
     *
     * Basic validation of elements against the constraints set in the Editor or
     * programmatically is always peformed, regardless of any custom validation.
     *
     * However, sometimes more complex validation is needed, including validations
     * that depend on more than one element. This is typically achieved by adding
     * custom validation logic in an event handler that you set using the input
     * element's [`onCustomValidation()`](#onCustomValidation) function. Within that
     * handler, you call the `reject()` function to indicate that the element is
     * invalid. The element's validity is checked when the value of the element
     * changes either by user interaction or programmatically.
     *
     * Note that validations other than **required**, including custom validations,
     * are not run on input elements when they don't have a value.
     */
    interface ValidatableMixin {
        /**
         * Indicates if an input element's value is valid.
         */
        readonly valid: boolean;
        /**
         * Gets a message indicating why the element is invalid, or an
         *  empty string if the message is valid.
         */
        readonly validationMessage: string;
        /**
         * Gets a ValidityState object that contains
         *  detailed information about the validity states of the element.
         */
        readonly validity: $w.ValidatableMixin.ValidityState;
        /**
         * Adds an event handler that runs when the element's validation is checked.
         */
        onCustomValidation(validator: $w.Validator): void;
        /**
         * Resets the element's visual validity indication.
         */
        resetValidityIndication(): void;
        /**
         * Updates the element's visual validity indication based on its current validity state.
         */
        updateValidityIndication(): void;
    }

    namespace ValidatableMixin {
        /**
         * Contains detailed information about the validity states of an element.
         */
        type ValidityState = {
            /**
             * `true` if the element's custom
             *  validity message has been set to a non-empty string.
             */
            customError: boolean;
            /**
             * `true` if the element meets all
             *  constraint validations.
             */
            valid: boolean;
            /**
             * `true` if the element's
             *  [`required`]($w.RequiredElement.html#required) property is `true`, but
             *  it does not contain a value.
             */
            valueMissing: boolean;
            /**
             * `true` if the element's value
             *  does not match its type when the type is email or url.
             */
            typeMismatch: boolean;
            /**
             * `true` if the element's
             *  value does not match its pattern validation.
             */
            patternMismatch: boolean;
            /**
             * `true` if the length of the
             *  element's value exceeds its [`maxlength`]($w.TextInputElement.html#maxlength)
             *  property.
             */
            tooLong: boolean;
            /**
             * `true` if the length of the
             *  element's value is smaller than its minlength.
             */
            tooShort: boolean;
            /**
             * `true` if the element's
             *  value is less than the its [`min`]($w.TextInput.html#min) property.
             */
            rangeUnderflow: boolean;
            /**
             * `true` if the element's
             *  value is more than the its [`max`]($w.TextInput.html#max) property.
             */
            rangeOverflow: boolean;
            /**
             * `true` if the element is
             *  an upload button that is required and a file has been selected but not
             *  uploaded.
             */
            fileNotUploaded: boolean;
            stepMismatch: boolean;
            /**
             * `true` if the element's value
             *  cannot be converted to a value
             */
            badInput: boolean;
        };

    }

    interface ValueMixin {
        /**
         * Sets or gets an element's value.
         */
        value: any;
        /**
         * Adds an event handler that runs when an input element's value
         *  is changed.
         */
        onChange(handler: $w.EventHandler): $w.Element;
    }

    /**
     * Vector images are digital illustrations based on geometric shapes.
     *  They maintain their high quality when resized.
     */
    interface VectorImage extends $w.Element, $w.HiddenCollapsedMixin, $w.LinkableMixin, $w.ClickableMixin{
        /**
         * Sets or gets the file location of the vector image.
         */
        src: string;
    }

    /**
     * A vertical site menu.
     */
    interface VerticalMenu extends $w.Element, $w.HiddenCollapsedMixin{
    }

    /**
     * An element that displays a video from Vimeo or Youtube.
     */
    interface Video extends $w.Element, $w.HiddenCollapsedMixin{
        /**
         * Sets or gets the URL of the video.
         */
        videoUrl: string;
    }

    /**
     * Provides functionality for elements that can be scrolled into and out
     *  of view.
     */
    interface ViewportMixin {
        /**
         * Adds an event handler that runs when an element is displayed
         *  in the viewable part of the current window.
         */
        onViewportEnter(handler: $w.EventHandler): $w.Element;
        /**
         * Adds an event handler that runs when an element is no longer
         *  displayed in the viewable part of the current window.
         */
        onViewportLeave(handler: $w.EventHandler): $w.Element;
    }

    type EventHandler = (event: $w.Event, $w: $w.$w)=>void;

    type ForItemCallback = ($item: $w.$w, itemData: any, index: number)=>void;

    /**
     * Handles events fired when a gallery moves to a new image.
     */
    type GalleryItemChangedEventHandler = (event: $w.GalleryItemChangedEvent, $w: $w.$w)=>void;

    /**
     * Handles events fired when an image in a gallery is clicked.
     */
    type GalleryItemClickedEventHandler = (event: $w.GalleryItemClickedEvent, $w: $w.$w)=>void;

    /**
     * Handles events fired when google map / marker is clicked.
     */
    type GoogleMapClickEvent = (event: $w.GoogleMapClickEvent)=>void;

    /**
     * Handles events fired when the code in an HtmlComponent sends a message.
     */
    type HtmlComponentMessageEventHandler = (event: $w.HtmlComponentMessageEvent, $w: $w.$w)=>void;

    type HtmlElementEventHandler = (event: $w.HtmlComponentMessageEvent, $w: $w.$w)=>void;

    /**
     * Handles events fired when a user hovers over a star on the rating component.
     */
    type IconMouseInEventHandler = (event: $w.IconMouseInEvent)=>void;

    type ItemReadyEventHandler = ($item: $w.$w, itemData: any, index: number)=>void;

    type ItemRemovedEventHandler = (itemData: any)=>void;

    /**
     * Handles events fired when the keyboard is pressed.
     */
    type KeyboardEventHandler = (event: $w.KeyboardEvent, $w: $w.$w)=>void;

    /**
     * Handles events fired when the mouse is clicked.
     */
    type MouseEventHandler = (event: $w.MouseEvent, $w: $w.$w)=>void;

    /**
     * Handles events fired when an item in a quick action bar is clicked.
     */
    type QuickActionBarItemClickedEventHandler = (event: $w.QuickActionBarItemClickedEvent, $w: $w.$w)=>void;

    /**
     * Function that runs when all page elements have finished loading.
     */
    type ReadyHandler = ()=>Promise<void> | void;

    /**
     * Handles events fired when a table cell is selected.
     */
    type TableCellEventHandler = (event: $w.TableCellEvent, $w: $w.$w)=>void;

    /**
     * Handles events fired when a table row is selected.
     */
    type TableRowEventHandler = (event: $w.TableRowEvent, $w: $w.$w)=>void;

    /**
     * Function that runs when custom validation is checked.
     */
    type Validator = (value: string | $w.UploadButton.File[] | boolean, reject: Function)=>void;

    /**
     * An element for playing audio files.
     */
    interface AudioPlayer extends $w.Element, $w.HiddenCollapsedMixin{
        /**
         * Sets or gets the name of the artist displayed in an audio player.
         */
        artistName: string;
        /**
         * Sets or gets the cover image displayed in an audio player.
         */
        coverImage: string;
        /**
         * Gets the current play time from the beginning of the audio track, in seconds.
         */
        readonly currentTime: number;
        /**
         * Gets the total play time of the audio track, in seconds.
         */
        readonly duration: number;
        /**
         * Indicates if the volume is currently muted.
         */
        readonly isMuted: boolean;
        /**
         * Indicates if an audio track is currently playing.
         */
        readonly isPlaying: boolean;
        /**
         * Sets or gets the file location of the audio file.
         */
        src: string;
        /**
         * Sets or gets the track name displayed in an audio player.
         */
        trackName: string;
        /**
         * Sets or gets an audio player's volume.
         */
        volume: number;
        /**
         * Mutes audio volume.
         */
        mute(): Promise<void>;
        /**
         * Adds an event handler that runs when playback has ended.
         */
        onEnded(handler: $w.EventHandler): $w.AudioPlayer;
        /**
         * Adds an event handler that runs when playback is paused.
         */
        onPause(handler: $w.EventHandler): $w.AudioPlayer;
        /**
         * Adds an event handler that runs when playback is started or restarted.
         */
        onPlay(handler: $w.EventHandler): $w.AudioPlayer;
        /**
         * Adds an event handler that runs when playback progresses.
         */
        onProgress(handler: $w.EventHandler): $w.AudioPlayer;
        /**
         * Pauses playback.
         */
        pause(): Promise<void>;
        /**
         * Begins or resumes playback.
         */
        play(): Promise<void>;
        /**
         * Moves playback to the specified time, in seconds.
         */
        seek(): Promise<void>;
        /**
         * Stops playback.
         */
        stop(): Promise<void>;
        /**
         * Toggles playback.
         */
        togglePlay(): Promise<void>;
        /**
         * Unmutes audio volume.
         */
        unmute(): Promise<void>;
    }

    /**
     * An element for working with paging.
     */
    interface Pagination extends $w.Element, $w.DisabledMixin, $w.HiddenCollapsedMixin, $w.ClickableMixin, $w.ViewportMixin{
        /**
         * Sets or gets the current page.
         */
        currentPage: number;
        /**
         * Sets or gets the total number of pages shown in a pagination bar.
         */
        totalPages: number;
        /**
         * Adds an event handler that runs when the pagination bar
         *  is changed.
         */
        onChange(handler: $w.EventHandler): $w.Pagination;
    }

    /**
     * An element for displaying the status of an ongoing process.
     */
    interface ProgressBar extends $w.Element, $w.HiddenCollapsedMixin, $w.StyleMixin{
        /**
         * Gets an object containing information about the progress bar's styles.
         */
        readonly style: $w.Style;
        /**
         * Sets or gets a progress bar's target value.
         */
        readonly targetValue: number;
        /**
         * Sets or gets a progress bar's value.
         */
        readonly value: number;
    }

    /**
     * A ratings display element allows you to display a value to your users
     *  using icons.
     */
    interface RatingsDisplay extends $w.Element, $w.HiddenCollapsedMixin, $w.ClickableMixin{
        /**
         * Sets or gets the displayed number of ratings.
         */
        numRatings: number;
        /**
         * Sets or gets the displayed rating.
         */
        rating: number;
    }

    /**
     * A ratings input element allows you to capture a value from your users
     *  using icons.
     */
    interface RatingsInput extends $w.FormElement, $w.DisabledMixin, $w.RequiredMixin, $w.HiddenCollapsedMixin, $w.FocusMixin, $w.ClickableMixin, $w.ViewportMixin{
        /**
         * Sets or gets the rating value.
         */
        value: number;
        /**
         * Sets the function that runs when a user's mouse enters one of the rating icons.
         */
        onIconMouseIn(handler: $w.IconMouseInEventHandler): $w.RatingsInput;
    }

    /**
     * RichTextBox is a rich text input as form element
     */
    interface RichTextBox extends $w.FormElement, $w.DisabledMixin, $w.TextInputMixin, $w.HiddenCollapsedMixin, $w.FocusMixin, $w.ReadOnlyMixin, $w.ClickableMixin, $w.RequiredMixin{
    }

    /**
     * Sliders allow users to select a number from a given range.
     */
    interface Slider extends $w.Element, $w.ValueMixin, $w.DisabledMixin, $w.HiddenCollapsedMixin, $w.FocusMixin{
        /**
         * Sets or gets the slider's maximum value.
         */
        max: number;
        /**
         * Sets or gets the slider's minimum value.
         */
        min: number;
        /**
         * Sets or gets a slider's step value.
         */
        step: number;
        /**
         * Sets or gets a slider's step type.
         */
        stepType: string;
        /**
         * Sets or gets the value of the slider.
         */
        readonly value: number;
    }

    /**
     * Switches are used for a single binary choice.
     */
    interface Switch extends $w.Element, $w.DisabledMixin, $w.HiddenCollapsedMixin, $w.FocusMixin, $w.ClickableMixin, $w.ValueMixin, $w.CheckedMixin{
        /**
         * Sets or gets whether a switch is on or off.
         */
        checked: boolean;
    }

    /**
     * An input element for capturing the time of day.
     */
    interface TimePicker extends $w.FocusMixin, $w.DisabledMixin, $w.HiddenCollapsedMixin, $w.RequiredMixin, $w.ReadOnlyMixin, $w.FormElement{
        /**
         * Sets or gets the number of minutes the time picker steps.
         */
        readonly step: number;
        /**
         * Sets or gets whether the time picker uses 12-hour or 24-hour format.
         */
        readonly useAmPmFormat: boolean;
        /**
         * Sets or gets a time picker's value.
         */
        readonly value: string;
    }

    /**
     * An element for presenting videos.
     */
    interface VideoPlayer extends $w.Element, $w.HiddenCollapsedMixin{
        /**
         * Gets the current play time from the beginning of the current video, in seconds.
         */
        readonly currentTime: number;
        /**
         * Gets the total play time of the current video, in seconds.
         */
        readonly duration: number;
        /**
         * Indicates if the volume is currently muted.
         */
        readonly isMuted: boolean;
        /**
         * Indicates if a video is currently playing.
         */
        readonly isPlaying: boolean;
        /**
         * Sets or gets the file location of the current video.
         */
        src: string;
        /**
         * Sets or gets the title displayed in a video player.
         */
        title: string;
        /**
         * Sets or gets the video player volume.
         */
        volume: number;
        /**
         * Mutes video volume.
         */
        mute(): Promise<void>;
        /**
         * Adds an event handler that runs when playback has ended.
         */
        onEnded(handler: $w.EventHandler): $w.VideoPlayer;
        /**
         * Adds an event handler that runs when playback is paused.
         */
        onPause(handler: $w.EventHandler): $w.VideoPlayer;
        /**
         * Adds an event handler that runs when playback is started or restarted.
         */
        onPlay(handler: $w.EventHandler): $w.VideoPlayer;
        /**
         * Adds an event handler that runs when playback progresses.
         */
        onProgress(handler: $w.EventHandler): $w.VideoPlayer;
        /**
         * Pauses playback.
         */
        pause(): Promise<void>;
        /**
         * Begins or resumes playback.
         */
        play(): Promise<void>;
        /**
         * Moves playback to the specified time, in seconds.
         */
        seek(): Promise<void>;
        /**
         * Pauses playback.
         */
        stop(): Promise<void>;
        /**
         * Toggles playback.
         */
        togglePlay(): Promise<void>;
        /**
         * Unmutes video volume.
         */
        unmute(): Promise<void>;
    }

    /**
     * An icon that leads users to the shopping cart.
     */
    interface CartIcon extends $w.Element, $w.HiddenCollapsedMixin{
        /**
         * Adds multiple products to the shopping cart.
         */
        addProductsToCart(products: $w.CartIcon.AddToCartItem[]): Promise<void>;
        /**
         * Adds a product to the shopping cart.
         */
        addToCart(productID: string, quantity?: number, options?: $w.CartIcon.AddToCartOptions): Promise<void>;
    }

    namespace CartIcon {
        /**
         * An object used to pass a custom text field when adding a product to
         *  the shopping cart with options.
         */
        type AddToCartCustomTextField = {
            /**
             * Custom text field title.
             */
            title: string;
            /**
             * Custom text field value.
             */
            value: string;
        };

        /**
         * An object used when adding multiple products to the shopping cart.
         */
        type AddToCartItem = {
            /**
             * The ID of the product to add to the cart.
             */
            productID: string;
            /**
             * Custom custom
             *  text fields to use when adding the product to the cart.
             */
            options?: $w.CartIcon.AddToCartOptions;
        };

        /**
         * An object used when adding a product to the shopping cart with options.
         */
        type AddToCartOptions = {
            /**
             * Product options to use when adding the
             *  product to the cart. The object contains key:value pairs where the key is the
             *  option name and the value is the chosen option value.
             */
            choices: any;
            /**
             * Custom custom
             *  text fields to use when adding the product to the cart.
             */
            customTextField: $w.CartIcon.AddToCartCustomTextField;
        };

    }

    /**
     * A store page for a specific product.
     */
    interface ProductPage extends $w.Element, $w.HiddenCollapsedMixin{
        /**
         * Gets the all the information associated with the current product.
         */
        getProduct(): Promise<$w.ProductPage.StoreProduct>;
    }

    namespace ProductPage {
        /**
         * An object representing a product in a store.
         */
        type StoreProduct = {
            /**
             * Product ID.
             */
            _id: string;
            /**
             * Product name.
             */
            name: string;
            /**
             * Product description.
             */
            description: string;
            /**
             * Main product media item (image or video thumbnail) URL.
             */
            mainMedia: string;
            /**
             * List of product media items.
             */
            mediaItems: $w.Gallery.ImageItem[] | $w.Gallery.VideoItem[];
            /**
             * Product stock keeping unit value.
             */
            sku: string;
            /**
             * List of product ribbons.
             */
            ribbons: $w.ProductPage.StoreProductRibbon[];
            /**
             * Product currency.
             */
            currency: string;
            /**
             * Product price.
             */
            price: number;
            /**
             * Discounted product price.
             */
            discountedPrice: number;
            /**
             * Product price formatted with the currency.
             */
            formattedPrice: string;
            /**
             * Discounted product price formatted with the currency.
             */
            formattedDiscountedPrice: string;
            /**
             * Indicates whether inventory is tracked for the product.
             */
            trackInventory: boolean;
            /**
             * Indicates whether the product is in stock.
             */
            inStock: boolean;
            /**
             * Number of units currently in stock.
             */
            quantityInStock: number;
            /**
             * Additional product information sections.
             */
            additionalInfoSections: $w.ProductPage.StoreProductAdditionalInfoSection[];
            /**
             * All the available options for a store product.
             */
            productOptions: $w.ProductPage.StoreProductOptions;
            /**
             * Product page relative URL.
             */
            productPageUrl: string;
            /**
             * Indicates whether product variants are managed.
             */
            manageVariants: boolean;
            /**
             * List of product customization fields.
             */
            customTextField: $w.ProductPage.StoreProductCustomTextFields[];
            /**
             * Product type. Either `"physical"` or `"digital"`.
             */
            productType: string;
            /**
             * Product slug.
             */
            slug: string;
            /**
             * Product weight.
             */
            weight: string;
        };

        /**
         * An object representing an additional info section for a store product.
         */
        type StoreProductAdditionalInfoSection = {
            /**
             * Section title.
             */
            title: string;
            /**
             * Section description.
             */
            description: string;
        };

        /**
         * An object representing a custom text field for a store product.
         */
        type StoreProductCustomTextFields = {
            /**
             * Product customization field title.
             */
            title: string;
            /**
             * Maximum length of product customization field in characters.
             */
            maxLength: string;
        };

        /**
         * An object representing an option for a store product.
         */
        type StoreProductOption = {
            /**
             * Option type. Either `"color"` or `"drop_down"`.
             */
            optionType: string;
            /**
             * Option name.
             */
            name: string;
            /**
             * Option choices.
             */
            choices: $w.ProductPage.StoreProductOptionsChoice[];
        };

        /**
         * An object representing all the available options for a store product.
         */
        type StoreProductOptions = {
            /**
             * Name of the option. This key name is
             *  dependent on the options added to the product. For example, if a product
             *  has a size option, this key will be something like "Size".
             */
            optionKey: $w.ProductPage.StoreProductOption;
        };

        /**
         * An object representing an options choice for a store product.
         */
        type StoreProductOptionsChoice = {
            /**
             * Choice value.
             */
            value: number;
            /**
             * Choice description.
             */
            description: number;
            /**
             * Choice media.
             */
            media: $w.ProductPage.StoreProductOptionsChoiceMedia;
            /**
             * Indicates whether the product with this choice is in stock.
             */
            inStock: boolean;
            /**
             * Indicates whether the product with this option is visible.
             */
            visible: boolean;
        };

        /**
         * An object representing the choice media
         */
        type StoreProductOptionsChoiceMedia = {
            /**
             * Main choice media item (image or video thumbnail) URL.
             */
            mainMedia: string;
            /**
             * List of choice media items.
             */
            mediaItems: $w.Gallery.ImageItem[] | $w.Gallery.VideoItem[];
        };

        /**
         * An object representing a ribbon for a store product.
         */
        type StoreProductRibbon = {
            /**
             * Ribbon text.
             */
            text: string;
        };

    }

    /**
     * A thank you page displayed when an order is created.
     */
    interface ThankYouPage extends $w.Element, $w.HiddenCollapsedMixin{
        /**
         * Gets the order associated with the current page.
         */
        getOrder(): Promise<$w.ThankYouPage.Order>;
    }

    namespace ThankYouPage {
        /**
         * An object that contains address information.
         */
        type Address = {
            /**
             * Address address line.
             */
            addressLine: string;
            /**
             * Address subdivision.
             */
            subdivision: string;
            /**
             * Address city.
             */
            city: string;
            /**
             * Address postal code.
             */
            postalCode: string;
            /**
             * Address country.
             */
            country: string;
            /**
             * Address in human readable format.
             */
            formatted: string;
        };

        /**
         * An object representing an order's billing info.
         */
        type BillingInfo = {
            /**
             * First name.
             */
            firstName: string;
            /**
             * Last name.
             */
            lastName: string;
            /**
             * Email address.
             */
            email: string;
            /**
             * Phone number.
             */
            phone: string;
            /**
             * Company name.
             */
            company: string;
            /**
             * Company name.
             */
            vatId: $w.ThankYouPage.VatId;
            /**
             * Billing address.
             */
            address: $w.ThankYouPage.Address;
        };

        /**
         * An object containing information about a buyer.
         */
        type BuyerInfo = {
            /**
             * Buyer's unique ID.
             */
            id: string;
            /**
             * Buyer's email address.
             */
            email: string;
            /**
             * Buyer's first name.
             */
            firstName: string;
            /**
             * Buyer's last name.
             */
            lastName: string;
            /**
             * Buyer's identity.
             *  One of:
             *
             *  + `"ADMIN"`: Buyer is the site owner.
             *  + `"MEMBER"`: Buyer is a logged-in site member.
             *  + `"VISITOR"`: Buyer is not logged in.
             *  + `"CONTACT"`: A contact has been created for the buyer.
             */
            identityType: string;
            /**
             * Buyer's phone number.
             */
            phone: string;
        };

        /**
         * An object representing a custom text field.
         */
        type CustomTextField = {
            /**
             * Field title.
             */
            title: string;
            /**
             * Field value.
             */
            value: string;
        };

        /**
         * An object representing a line item in a shopping cart.
         */
        type LineItem = {
            /**
             * Name of the line item.
             */
            name: string;
            /**
             * Notes about the line item.
             */
            notes: string;
            /**
             * Line item price.
             */
            price: string;
            /**
             * Line item product ID.
             */
            productId: string;
            /**
             * Line item quantity.
             */
            quantity: number;
            /**
             * Line item stock keeping unit.
             */
            sku: string;
            /**
             * Total price charged to the customer for all line items after any applicable discounts.
             */
            totalPrice: string;
            /**
             * Line item weight.
             */
            weight: string;
            /**
             * Type of the line item.
             *  One of:
             *
             *  + `"DIGITAL"`: Digital item.
             *  + `"PHYSICAL"`: Physical item.
             *  + `"CUSTOM_AMOUNT_ITEM"`: Item with a custom price.
             *  + `"UNSPECIFIED"`: Type can't be classified due to an error.
             */
            lineItemType: string;
            /**
             * Line item options.
             */
            options: $w.ThankYouPage.Option[];
            /**
             * Media item.
             */
            mediaItem: $w.ThankYouPage.MediaItem;
            /**
             * Custom text.
             */
            customTextFields: $w.ThankYouPage.CustomTextField[];
            /**
             * Line item index.
             */
            index: number;
        };

        /**
         * An object representing a media item.
         */
        type MediaItem = {
            /**
             * Type of the media item.
             *  One of:
             *
             *  + `"IMAGE"`: Image item.
             *  + `"UNSPECIFIED_MEDIA_TYPE_ITEM"`: Media item type can't be classified due to an error.
             */
            mediaType: string;
            /**
             * Media item URL.
             */
            url: string;
            /**
             * Media item height.
             */
            height: number;
            /**
             * Media item width.
             */
            width: number;
        };

        /**
         * An object representing a line item option.
         */
        type Option = {
            /**
             * Name of the product option.
             */
            option: string;
            /**
             * Selected option.
             */
            selection: string;
        };

        /**
         * An object representing an order.
         */
        type Order = {
            /**
             * Unique order identifier.
             */
            _id: string;
            /**
             * Date the order was created.
             */
            _dateCreated: Date;
            /**
             * Running order number.
             */
            number: number;
            /**
             * Order currency.
             */
            currency: string;
            /**
             * Billing information.
             */
            billingInfo: $w.ThankYouPage.BillingInfo;
            /**
             * Buyer information.
             */
            buyerInfo: $w.ThankYouPage.BuyerInfo;
            /**
             * Order items.
             */
            lineItems: $w.ThankYouPage.LineItem[];
            /**
             * Order totals.
             */
            totals: $w.ThankYouPage.Totals;
            /**
             * The unit in which the order's weight is
             *  measured. Either `"KG"` or `"LB"`.
             */
            weightUnit: string;
            /**
             * Shipping information.
             */
            shippingInfo: $w.ThankYouPage.ShippingInfo;
            /**
             * A note added by the buyer.
             */
            buyerNote: string;
        };

        /**
         * An object representing an order's totals.
         */
        type OrderTotals = {
            /**
             * The subtotal of all the order's line items, excluding tax.
             */
            subtotal: number;
            /**
             * The total shipping price, including tax.
             */
            shipping: number;
            /**
             * The total amount of tax.
             */
            tax: string;
            /**
             * The total calculated discount amount.
             */
            discount: number;
            /**
             * The total price.
             */
            total: number;
            /**
             * The total weight of the order's items.
             */
            weight: number;
            /**
             * The total quantity of the the order's line items.
             */
            quantity: number;
        };

        /**
         * An object representing an order's shipping details.
         */
        type PickupDetails = {
            /**
             * Pickup instructions.
             */
            pickupInstructions: string;
            /**
             * Pickup address.
             */
            pickupAddress: $w.ThankYouPage.Address;
            /**
             * First name.
             */
            firstName: string;
            /**
             * Last name.
             */
            lastName: string;
            /**
             * Email address.
             */
            email: string;
            /**
             * Phone number.
             */
            phone: string;
        };

        /**
         * An object representing an order's shipping details.
         */
        type ShipmentDetails = {
            /**
             * Shipping address.
             */
            address: $w.ThankYouPage.Address;
            /**
             * First name.
             */
            firstName: string;
            /**
             * Last name.
             */
            lastName: string;
            /**
             * Email address.
             */
            email: string;
            /**
             * Phone number.
             */
            phone: string;
        };

        /**
         * An object representing an order's shipping info.
         */
        type ShippingInfo = {
            /**
             * Delivery option information.
             */
            deliveryOption: string;
            /**
             * Estimated delivery time.
             */
            estimatedDeliveryTime: string;
            shipmentDetails: $w.ThankYouPage.ShipmentDetails;
            pickupDetails: $w.ThankYouPage.PickupDetails;
        };

        /**
         * An object representing an order's totals.
         */
        type Totals = {
            /**
             * The subtotal of all the order's line items, excluding tax.
             */
            subtotal: number;
            /**
             * The total shipping price, including tax.
             */
            shipping: number;
            /**
             * The total amount of tax.
             */
            tax: string;
            /**
             * The total calculated discount amount.
             */
            discount: number;
            /**
             * The total price.
             */
            total: number;
            /**
             * The total weight of the order's items.
             */
            weight: number;
            /**
             * The total quantity of the the order's line items.
             */
            quantity: number;
        };

        /**
         * An object that contains VAT information.
         */
        type VatId = {
            /**
             * VAT number.
             */
            number: string;
            /**
             * VAT type. Either `"CFP"` or `"CPNJ"`.
             */
            type: string;
        };

    }

}

/**
     * An object returned by the `getProductOptionsAvailability()` function representing the availability of a product.
     */
    type ProductOptionsAvailability = {
        /**
         * Whether the product with the specified option choices is available for purchase.
         */
        availableForPurchase: boolean;
        /**
         * An object representing all the available options for a store product.
         */
        productOptions: $w.ProductPage.StoreProductOptions;
        /**
         * Main product media item (image or video) URL.
         */
        mainMedia: string;
        /**
         * List of product media items.
         */
        mediaItems: $w.Gallery.ImageItem[] | $w.Gallery.VideoItem[];
        /**
         * The variant of the product selected using the specified option choices if there is one.
         */
        selectedVariant: wix_stores_backend.ProductOptionsAvailabilitySelectedVariant;
    };