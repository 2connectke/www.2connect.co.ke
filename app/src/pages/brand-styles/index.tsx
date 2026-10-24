import BrandHero from './partials/BrandHero';
import ChapterRail from './partials/ChapterRail';
import Colours from './partials/Colours';
import Components from './partials/Components';
import Hierarchy from './partials/Hierarchy';
import Imagery from './partials/Imagery';
import Motion from './partials/Motion';
import Philosophy from './partials/Philosophy';
import ProprietaryNotice from './partials/ProprietaryNotice';
import Shape from './partials/Shape';
import { CopyProvider } from './partials/shared';
import Spacing from './partials/Spacing';
import Typography from './partials/Typography';
import Voice from './partials/Voice';

/**
 * Internal brand guide at /brand-styles. Marked private in data/seo.json, so
 * it is kept out of search, the sitemap and the site's menus, and ends with
 * the proprietary notice instead of the public footer.
 */
export default function BrandStyles() {
    return (
        <CopyProvider>
            <BrandHero />
            <Philosophy />
            <Colours />
            <Typography />
            <Spacing />
            <Hierarchy />
            <Shape />
            <Components />
            <Motion />
            <Voice />
            <Imagery />
            <ProprietaryNotice />
            <ChapterRail />
        </CopyProvider>
    );
}
