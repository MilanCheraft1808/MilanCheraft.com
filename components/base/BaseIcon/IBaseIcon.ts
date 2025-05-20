import type { LucideProps } from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'

export type icon = FunctionalComponent<LucideProps, {}, any, {}>

export interface IBaseIcon {
    icon: icon
}
