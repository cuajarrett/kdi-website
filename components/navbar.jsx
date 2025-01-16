"use client";

import { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/dropdown";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import { link as linkStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import clsx from "clsx";

import { ChevronDown } from "@/components/icons";
import { NAVBAR } from "@/data";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { logo, links } = NAVBAR;

  return (
    <NextUINavbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            href={logo.link}
          >
            <Image
              height={65}
              src={logo.src}
              alt={logo.alt}
              className="object-contain transform transition hover:scale-105"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {/* <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {links.map(({ label, link, subcategories }) =>
            subcategories ? (
              <Dropdown key={link}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium"
                      )}
                      endContent={<ChevronDown size={16} />}
                      radius="sm"
                      variant="light"
                    >
                      {label}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label={`${label} features`}
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {subcategories.map(({ label, description, link }) => (
                    <DropdownItem
                      key={link}
                      description={description}
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium"
                      )}
                      as={Link}
                      href={link}
                    >
                      {label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem key={link}>
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "h-10 data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  href={link}
                >
                  {label}
                </Link>
              </NavbarItem>
            )
          )}
        </ul>
      </NavbarContent> */}

      <NavbarContent justify="end">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {links.map(({ label, link, subcategories }) =>
            subcategories ? (
              <Dropdown placement="bottom-start" key={link}>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium"
                      )}
                      endContent={<ChevronDown size={16} />}
                      radius="sm"
                      variant="light"
                    >
                      {label}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label={`${label} features`}
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {subcategories.map(({ label, logo, link }) => (
                    <DropdownItem
                      key={link}
                      // description={description}
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium"
                      )}
                      as={Link}
                      startContent={
                        <Image
                          height={25}
                          width={50}
                          className="object-contain"
                          src={logo.src}
                          alt={logo.alt}
                        />
                      }
                      href={link}
                    >
                      {label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem key={link}>
                <Button
                  disableRipple
                  as={Link}
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "h-10 data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  variant="light"
                  href={link}
                >
                  {label}
                </Button>
              </NavbarItem>
            )
          )}
        </ul>
        <NavbarItem>
          <Button as={Link} href="/contact" color="primary" variant="solid">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {links.map(({ label, link, subcategories }) =>
            subcategories ? (
              <Accordion key={link}>
                <AccordionItem
                  aria-label={`${label} menu`}
                  title={label}
                  classNames={{ title: "text-lg font-bold" }}
                >
                  <div className="flex flex-col gap-2">
                    {subcategories.map(({ label, logo, link }) => (
                      <Link
                        key={link}
                        className={clsx(
                          linkStyles({ color: "foreground" }),
                          "text-sm flex items-center space-x-2"
                        )}
                        onPress={() => setIsMenuOpen(false)}
                        href={link}
                      >
                        <Image
                          height={20}
                          width={40}
                          className="object-contain"
                          src={logo.src}
                          alt={logo.alt}
                        />
                        <span>{label}</span>
                      </Link>
                    ))}
                  </div>
                </AccordionItem>
              </Accordion>
            ) : (
              <NavbarMenuItem key={link}>
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "py-4 px-2 text-lg font-bold"
                  )}
                  onPress={() => setIsMenuOpen(false)}
                  href={link}
                >
                  {label}
                </Link>
              </NavbarMenuItem>
            )
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
