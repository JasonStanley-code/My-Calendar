import KR from "./wawancara/kr.md"
import Acin from "./wawancara/acin.md"
import Kinan from "./wawancara/kinan.md"
import PG from "./wawancara/pg.md"
import Viel from "./wawancara/viel.md"
import Jesson from "./wawancara/jesson.md"


const routes = [
    {
        path : "/kr",
        frontmatter : KR.attributes,
        html : KR.html
    },
    {
        path : "/acin",
        frontmatter : Acin.attributes,
        html : Acin.html
    },
    {
        path : "/kinan",
        frontmatter : Kinan.attributes,
        html : Kinan.html
    },
    {
        path : "/pg",
        frontmatter : PG.attributes,
        html : PG.html
    },
    {
        path : "/viel",
        frontmatter : Viel.attributes,
        html : Viel.html
    },
    {
        path : "/jesson",
        frontmatter : Jesson.attributes,
        html : Jesson.html
    },
    
]

export default routes;