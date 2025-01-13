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
import NextLink from "next/link";
import clsx from "clsx";

import { ChevronDown, Logo } from "@/components/icons";
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
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">KDI</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
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
                      as={NextLink}
                      href={link}
                    >
                      {label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem key={link}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "h-10 data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  href={link}
                >
                  {label}
                </NextLink>
              </NavbarItem>
            )
          )}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/contact" variant="flat">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {links.map(({ label, link, subcategories }) =>
            subcategories ? (
              <Accordion key={link}>
                <AccordionItem aria-label={`${label} menu`} title={label}>
                  <div className="flex flex-col gap-1">
                    {subcategories.map(({ label, link }) => (
                      <NextLink
                        key={link}
                        className={clsx(
                          linkStyles({ color: "foreground" }),
                          "text-sm"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                        href={link}
                      >
                        {label}
                      </NextLink>
                    ))}
                  </div>
                </AccordionItem>
              </Accordion>
            ) : (
              <NavbarMenuItem key={link}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "py-4 px-2 text-md"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  href={link}
                >
                  {label}
                </NextLink>
              </NavbarMenuItem>
            )
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
