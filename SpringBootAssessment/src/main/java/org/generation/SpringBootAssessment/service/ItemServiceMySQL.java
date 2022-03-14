package org.generation.SpringBootAssessment.service;

import org.generation.SpringBootAssessment.repository.ItemRepository;
import org.generation.SpringBootAssessment.repository.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ItemServiceMySQL implements ItemService {

    private final ItemRepository itemRepository;



    public ItemServiceMySQL(@Autowired ItemRepository itemRepository)
    {
        this.itemRepository = itemRepository;
    }

    @Override

    public Item save (Item item)
    {
        return this.itemRepository.save(item);
    }

    @Override

    public void delete (int itemId)
    {
        this.itemRepository.deleteById(itemId);
    }

    @Override
    public List<Item> all ()
    {
        List<Item> result = new ArrayList<>();
        this.itemRepository.findAll().forEach(result::add);
        return result;
    }

    @Override
    public Item findById (int itemId)
    {
        Optional<Item> item = this.itemRepository.findById(itemId);
        Item itemResponse = item.get();
        return itemResponse;
    }
}
