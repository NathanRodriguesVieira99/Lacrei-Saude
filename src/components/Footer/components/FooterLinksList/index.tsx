import { footerLinks } from "@/data/Footer"
import { FooterLinksList, LinksList, List } from "./styles"
import { ListItens } from "../SocialMediaLinksList/styles"

export const FooterLinkListComponent = () =>{
  return(
     <FooterLinksList>
            <LinksList>
              {footerLinks.map((link, index) => (
                <List key={index}>
                  <ListItens href="#">{link}</ListItens>
                </List>
              ))}
            </LinksList>
          </FooterLinksList>
  )
}