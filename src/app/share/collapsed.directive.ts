import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive ({
    selector: "[appCollapsed]"
})
export class CollapsedDirective {
    @HostBinding ("class.collapsed") isCollapsed = true
 
    @HostListener('click') toggleCollapsed () {
        this.isCollapsed = !this.isCollapsed
    }
}