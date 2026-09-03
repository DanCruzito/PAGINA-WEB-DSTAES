import { CompanyInterface } from "../entities/company.interface";
import { HomeImageInterface } from "../entities/home_image.interface";
import { PackageInterface } from "../entities/package.interface";
import { ProjectInterface } from "../entities/project.interface";
import { ServiceInterface } from "../entities/service.interface";
import { SiteSettingsInterface } from "../entities/site_settings.interface";
import { SocialLinkInterface } from "../entities/social_links.interface";
import { SystemInterface } from "../entities/system.interface";
import { SystemPlanInterface } from "../entities/system_plan.interface";
import { TechnologyInterface } from "../entities/technology.interface";
import { TestimonialInterface } from "../entities/testimonial.interface";

export interface LandingPageInfoInterface {
  company: CompanyInterface;
  site_settings: SiteSettingsInterface;
  social_links: SocialLinkInterface[];
  services: ServiceInterface[];
  packages: PackageInterface[];
  home_images: HomeImageInterface[];
  systems: SystemInterface[];
  system_plans: SystemPlanInterface[];
  technologies: TechnologyInterface[];
  projects: ProjectInterface[];
  testimonials: TestimonialInterface[];
}
