<?php

namespace App\Entity;

use App\Repository\CityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CityRepository::class)
 */
class City
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Name;

    /**
     * @ORM\OneToMany(targetEntity=Bin::class, mappedBy="city")
     */
    private $bins;

    public function __construct()
    {
        $this->bins = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): self
    {
        $this->Name = $Name;

        return $this;
    }

    /**
     * @return Collection|Bin[]
     */
    public function getBins(): Collection
    {
        return $this->bins;
    }

    public function addBin(Bin $bin): self
    {
        if (!$this->bins->contains($bin)) {
            $this->bins[] = $bin;
            $bin->setCity($this);
        }

        return $this;
    }

    public function removeBin(Bin $bin): self
    {
        if ($this->bins->removeElement($bin)) {
            // set the owning side to null (unless already changed)
            if ($bin->getCity() === $this) {
                $bin->setCity(null);
            }
        }

        return $this;
    }
}
